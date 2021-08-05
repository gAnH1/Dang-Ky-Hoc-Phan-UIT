import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredMaMH,
  selectHeDaoTaoFiltered,
  selectlistHeDT,
  selectListMaMHTextarea,
} from 'redux/xepTkb/selectors';
import { setHeDaoTaoFiltered, setListMaMHTextarea } from 'redux/xepTkb/slice';

function TopInputs() {
  const dispatch = useDispatch();
  const listMaMHTextarea = useSelector(selectListMaMHTextarea);
  const listHeDT = useSelector(selectlistHeDT);
  const heDaoTaoFiltered = useSelector(selectHeDaoTaoFiltered);
  const listFilteredMaMH = useSelector(selectFilteredMaMH);

  const options = ['Ẩn môn đã chọn', 'Chỉ hiện lớp đã chọn'];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={2} style={{ marginBottom: 10 }}>
      <Grid item xs={4}>
        <Tooltip title="Copy paste từ https://daa.uit.edu.vn/content/chuong-trinh-dao-tao-tu-khoa-7-tro-di">
          <TextField
            label="Bộ lọc môn thông minh"
            placeholder={'IT004 IT005 IT006 EN006 SS004 IT008'}
            fullWidth
            size="small"
            variant="outlined"
            value={listMaMHTextarea}
            onChange={(e) => dispatch(setListMaMHTextarea(e.target.value))}
          />
        </Tooltip>
      </Grid>
      <Grid item xs={4}>
        <Tooltip title={'Kết quả từ ô input bên trái'}>
          <TextField
            label={'Các mã môn học được lọc ra'}
            disabled
            fullWidth
            size="small"
            variant="outlined"
            value={listFilteredMaMH?.length > 0 ? listFilteredMaMH.join(' ') : 'Chưa có mã môn học nào được lọc ra'}
          />
        </Tooltip>
      </Grid>
      <Grid item xs={4} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Autocomplete
          // multiple
          options={listHeDT}
          // disableCloseOnSelect
          value={heDaoTaoFiltered}
          onChange={(_, value) => {
            dispatch(setHeDaoTaoFiltered(value));
          }}
          fullWidth
          size="small"
          // limitTags={2}
          // renderOption={(option, { selected }) => (
          //   <>
          //     <Checkbox
          //       icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
          //       checkedIcon={<CheckBoxIcon fontSize="small" />}
          //       style={{ marginRight: 8 }}
          //       checked={selected}
          //       color="primary"
          //     />
          //     {option}
          //   </>
          // )}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Hệ đào tạo" placeholder="Lọc theo hệ đào tạo" />
          )}
        />
        <div>
          <IconButton onClick={handleClick} color="primary" style={{ padding: 0 }}>
            <VisibilityIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {options.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => {}}>
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  style={{ marginRight: 8 }}
                  checked={true}
                  color="primary"
                />
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Grid>
    </Grid>
  );
}

export default TopInputs;
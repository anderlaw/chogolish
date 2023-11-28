import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { categoryLabelMap } from "@/utils/categoryLabelMap";
import { observer } from "mobx-react-lite";
import { RootStore, StoreContext } from "@/store";
// const categoryData =

const CategoryDialogComponent = observer(() => {
  const store = useContext(StoreContext);
  const [categoryData, setCategoryData] = useState<Array<string>>([]);
  useEffect(() => {
    if (store.categoryDialog_open) {
      //   const categoryDataStorage = localStorage.getItem(
      //     "video_category_storage_key"
      //   );
      //   categoryDataStorage && setCategoryData(JSON.parse(categoryDataStorage));
    }
  }, [store.categoryDialog_open]);
  const handleClose = () => store.update_categoryDialog_open(false);
  return (
    <Dialog
      open={store.categoryDialog_open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"点击某个分类搜索视频"}
      </DialogTitle>
      <DialogContent>
        <Box>
          {categoryData.map((label) => (
            <Chip
              sx={{
                margin: "6px",
              }}
              color="success"
              key={label}
              label={categoryLabelMap[label] || label}
              variant="outlined"
              onClick={() => alert(label)}
            />
          ))}
        </Box>
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose}>取消</Button> */}
        <Button onClick={handleClose}>关闭</Button>
      </DialogActions>
    </Dialog>
  );
});
export default CategoryDialogComponent;

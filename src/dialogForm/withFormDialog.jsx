import React, { Fragment } from "react";
import PropType from "prop-types";
import {
  useTheme,
  IconButton,
  Button,
  DialogContent,
  useMediaQuery,
  Dialog,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const withFormDialog = (Component) => {
  const WithDialog = ({
    open,
    onClose,
    title,
    onSubmit,
    saveText,
    ...props
  }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

    const handleSubmit = (obj) => {
      if (onSubmit.constructor.name === "AsyncFunction") {
        onSubmit(obj).then(() => onClose());
      } else {
        onSubmit(obj);
        onClose();
      }
    };

    return (
      <Fragment>
        <Dialog
          open={open}
          onClose={onClose}
          fullScreen={fullScreen}
          maxWidth="sm"
          fullWidth
        >
          <Box
            component={Paper}
            square
            display="flex"
            alignItems="center"
            py={1}
            px={0}
            elevation={3}
          >
            <Box mx={1}>
              <IconButton id="closeForm" onClick={onClose} aria-label="Cancel">
                <CloseIcon />
              </IconButton>
            </Box>
            <Box flex={1}>
              <Typography style={{ fontWeight: 500 }}>{title}</Typography>
            </Box>
            <Box mr={2}>
              <Button
                id="submitForm"
                type="submit"
                form="dialogForm"
                size="medium"
              >
                {saveText}
              </Button>
            </Box>
          </Box>

          <DialogContent>
            <Component formId="dialogForm" onSubmit={handleSubmit} {...props} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  };
  return WithDialog;
};

withFormDialog.defaultProps = {
  saveText: "Save",
};

withFormDialog.propType = {
  open: PropType.bool.isRequired,
  onClose: PropType.func.isRequired,
  title: PropType.string.isRequired,
  onSubmit: PropType.func.isRequired,
  saveText: PropType.string.isRequired,
};

export default withFormDialog;

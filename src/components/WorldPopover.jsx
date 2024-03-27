"use client";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

function WorldPopover({ anchorEl, open, handleClose }) {
  // const handlePopoverEnter = () => {
  //   if (!open) {
  //     // Open the Popover only if it's not already open
  //     handleClose();
  //   }
  // };

  // const handlePopoverLeave = () => {
  //   // Close the Popover when mouse leaves it
  //   handleClose();
  // };

  return (
    <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={handleClose}
      onMouseLeave={handleClose}
      disableRestoreFocus
    >
      <Typography sx={{ p: 1 }}>I use Popover.</Typography>
    </Popover>
  );
}

export default WorldPopover;

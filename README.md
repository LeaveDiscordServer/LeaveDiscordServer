### `script.js`

- **Description**: This script automates leaving a server on Discord. It opens the sidebar, navigates to the "Leave Server" option, and confirms the action.

## How to Use

1. **Get the Raw URL**:
   - Navigate to the script file in this repository.
   - Click the "Raw" button to view the file's raw content.
   - Copy the URL from the browser's address bar.

2. **Execute the Script in Browser Console**:
   - Open your browser's Developer Tools (usually with `F12` or `Ctrl+Shift+I`).
   - Go to the **Console** tab.
   - Run the following command, replacing `YOUR_RAW_FILE_URL` with the URL you copied:

   ```javascript
   fetch('YOUR_RAW_FILE_URL')
     .then(r => r.text())
     .then(eval);

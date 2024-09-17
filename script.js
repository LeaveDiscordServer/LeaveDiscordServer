// Wait for an element to appear and return it
async function waitForElement(selector, timeout = 5000) {
  const startTime = Date.now();
  while (Date.now() - startTime < timeout) {
    const element = document.querySelector(selector);
    if (element) return element;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error(`Element "${selector}" not found in ${timeout}ms`);
}

// Main function to perform actions
(async () => {
  try {
    // Ensure the sidebar is open
    const sidebar = await waitForElement('.container_fd6364');
    if (!sidebar.classList.contains('selected_fd6364')) sidebar.click();

    // Click the "Leave Server" button and confirm
    await (await waitForElement('#guild-header-popout-leave')).click();
    await (await waitForElement('button.button_dd4f85.colorRed_dd4f85')).click();
    
    console.log('Server left successfully.');
  } catch (error) {
    console.error(error.message);
  }
})();

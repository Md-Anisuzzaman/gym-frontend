const fs = require('fs');
const path = require('path');

// Function to log the directory structure
const logProjectStructure = (dirPath, depth = 0) => {
    // Read all items (files and directories) in the current directory
    const items = fs.readdirSync(dirPath);

    items.forEach(item => {
        const fullPath = path.join(dirPath, item);

        // Skip specific directories
        if (item === 'node_modules' || item === '.next' || item === 'public' || item === 'reduxRTK') return;

        const isDirectory = fs.lstatSync(fullPath).isDirectory();

        // Log with indentation based on depth
        console.log(`${'  '.repeat(depth)}- ${item}`);

        // If the item is a directory, recursively log its contents
        if (isDirectory) {
            logProjectStructure(fullPath, depth + 1);
        }
    });
};

// Start logging from the root of your Next.js project
const projectRoot = path.resolve(__dirname); // Adjust if needed
console.log('Next.js Project Structure (excluding specific directories):\n');
logProjectStructure(projectRoot);

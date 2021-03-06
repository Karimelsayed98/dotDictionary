let main = require('../../main.js')
const { remote, BrowserWindow } = require('electron');

const menuTemplate = [
    
    process.platform == 'darwin' ? {
        label: 'dotDictionary',
        submenu: [
            {
                label:'Quit dotDictionary',
                role: 'quit'
            }
        ]
    } : 
    {},
    {
        label:'File',
        submenu: [
            {
                label: 'Add new word',
                click(){
                    BrowserWindow.getFocusedWindow().webContents.send('addWord');

                },
                accelerator: 'CmdOrCtrl+N'
            },
            process.platform=='win32'?
            {
                label: 'Quit dotDictionary',
            role: 'quit'
                
            }:
            {}
        ]
    },
    {

        label: 'Edit',
        submenu: [
            {
                label: 'Undo',
                accelerator: 'CmdOrCtrl+Z',
                click() {
                    main.history.undo();
                }
            },
            {
                label: 'Redo',
                accelerator: process.platform === 'darwin' ? 'Command+Shift+Z' : 'Ctrl+Y',
                click() {
                    main.history.redo();
                }
            },
            {
                label: 'Reload',
                role: 'reload',

            },
            {
                label: 'Toggle Developer Tools',
                accelerator: 'CmdOrCtrl+Shift+I',
                click(item, focusedWindow) {
                    if (focusedWindow) focusedWindow.webContents.toggleDevTools()
                }
            },
            {
                label: 'Copy',
                role: 'copy',
                accelerator:  'CmdOrCtrl+C',
            },
            {
                label: 'Paste',
                role: 'paste',
                accelerator: 'CmdOrCtrl+V',
            },

        ]
    },
    {
        label: 'Window',
submenu:[
       {
        role: 'minimize'
      },
      {
         role: 'togglefullscreen'
      }
]
    }





]
module.exports = menuTemplate;
#!/usr/bin/env node

const fs = require("fs");
const root = process.cwd(); // 根目录


const DirName = 'D:\\学习\\小王子 - 副本\\';
const targetStr = '《xxx.';
const repalceStr = '';

// const readDir = fs.readdirSync(DirName);
// console.log(readDir);

fs.readdir(DirName, 'utf8', (err, fileList) => {
    if (err) throw err;
    fileList.forEach(async (item, index) => {
        // ((originalName) => {
        //     let oldName = originalName;
        //     let newName = oldName.replace('小王子》全集_(中英对照)_(大人更应该读的童话).', '');
        //     fs.renameSync(DirName + oldName, DirName + newName, (err) => {
        //         if (err) {
        //             console.log(err);
        //         }else {
        //             console.log(`${index}:success`)
        //         }
        //     });
        // })(item);

        let oldName = item;
        let newName = oldName.replace(targetStr, repalceStr);
        fs.renameSync(DirName + oldName, DirName + newName, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`${index}:success`);
                if (index === fileList.length - 1) {
                    console.log('batch update Finish!!!')
                }
            }
        });
    })
});


// fs.readdir(DirName, 'utf8', (err, fileList) => {
//     if (err) throw err;
//     fileList.forEach(async (item, index) => {
//         ((originalName) => {
//             let oldName = originalName;
//             let arr = item.split('.');
//             if (arr && arr.length === 3) {
//                 const newName = `${arr[0]}.${arr[2]}`;
//                 fs.rename(DirName + oldName, DirName + newName, (err) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log('success');
//                     }
//                 });
//             }
//         })(item);
//     })
// });



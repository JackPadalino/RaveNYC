### Rave NYC

Calendar app for all electronic events happening in NYC by month

### Next steps
- Tutorial for React Calendar: https://www.youtube.com/watch?v=lyRP_D0qCfk
- Add UUID for all DB models instead of integer PK's
- React notes - 
    - MUI React components (similar to Bootstrap)
    - 'exact' keyword for establish routes in React to avoid conflicts
    - 'create-react-app' command for setup


const month = [[],[],[],[],[],[]];
for(const week of month){
    for(let i=1;i<8;i++){
        week.push(i);
    };
};

console.log(month);
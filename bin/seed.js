const {
    db,Year,Month,Day,Event
} = require('../server/db');

const seedDB=async()=>{
    await db.sync({force:true,logging:false});

    // Year instances
    const years = [
        {date:'2022'},
        {date:'2023'},
    ];
    const yearPromises = years.map((year)=>Year.create(year));
    const [year_2022] = await Promise.all(yearPromises);

    // Month instances
    const months = [
        {date:'January',yearId:year_2022.id},
        //{date:'February',yearId:year_2022.id},
        //{date:'March',yearId:year_2022.id},
    ];
    const monthPromises = months.map((month)=>Month.create(month));
    const [january_2022,february_2022,march_2022] = await Promise.all(monthPromises);

    // January Day instances
    const january_days=[];
    for(let i=1;i<32;i++){
        const day={date:i,monthId:january_2022.id};
        january_days.push(day);
    };
    const januaryPromises = january_days.map((day)=>Day.create(day));
    const [january_01_2022,january_02_2022,january_03_2022,january_04_2022,january_05_2022] = await Promise.all(januaryPromises);

    // // February Day instances
    // const february_days=[];
    // for(let i=1;i<32;i++){
    //     const day={date:i,monthId:february_2022.id};
    //     february_days.push(day);
    // };
    // const februaryPromises = february_days.map((day)=>Day.create(day));
    // const [february_01_2022,february_02_2022] = await Promise.all(februaryPromises);

    // // March Day instances
    // const march_days=[];
    // for(let i=1;i<32;i++){
    //     const day={date:i,monthId:march_2022.id};
    //     march_days.push(day);
    // };
    // const marchPromises = march_days.map((day)=>Day.create(day));
    // const [march_01_2022,march_02_2022] = await Promise.all(marchPromises);

    // Event instances
    const events = [
        {artist:'Township Rebellion',venue:'Brooklyn Monarch',dayId:january_01_2022.id,monthId:january_2022.id},
        {artist:'Snerd',venue:'Brooklyn Monarch',dayId:january_01_2022.id,monthId:january_2022.id},
        {artist:'DJ Sasha',venue:'Avante Gardner',dayId:january_01_2022.id,monthId:january_2022.id},
        {artist:'Modern Bohemia',venue:'Avante Gardner',dayId:january_02_2022.id,monthId:january_2022.id},
        {artist:'Anjuna Deep',venue:'Brooklyn Mirage',dayId:january_02_2022.id,monthId:january_2022.id},
        {artist:'BAM',venue:'Brooklyn Mirage',dayId:january_03_2022.id,monthId:january_2022.id}

    ];
    const eventPromises = events.map((event)=>Event.create(event));
    await Promise.all(eventPromises);

    console.log('Seeding successful!')
};

seedDB();
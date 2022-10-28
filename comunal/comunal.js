let companies = [
  {
    name: "Gmhost",
    orders: [
      {
        created: "05.07.2021",
        payed: "05.07.2021 23:32"
      },
      {
        created: "24.09.2021",
        payed: "24.09.2021 10:34"
      }
    ]
  },
  {
    name: "ТОВ «ЕНЕРА СУМИ»",
    orders: [
      { created: '06.01.2021', payed: '08.01.2021 13:33' },
      { created: '08.02.2021', payed: '08.02.2021 23:18' },
      { created: '09.03.2021', payed: '10.03.2021 19:11' },
      { created: '08.04.2021', payed: '11.04.2021 08:56' },
      { created: '07.05.2021', payed: '14.05.2021 14:23' },
      { created: '08.06.2021', payed: '22.06.2021 17:36' },
      { created: '07.07.2021', payed: '07.07.2021 15:37' },
      { created: '07.08.2021', payed: '14.08.2021 10:22' },
      { created: '07.09.2021', payed: '09.09.2021 23:14' },
      { created: '06.10.2021', payed: '10.10.2021 19:57' },
      { created: '07.11.2021', payed: '' },
      { created: '06.12.2021', payed: '17.12.2021 14:04' }
    ]
  },
  {
    name: "СУМИГАЗ ЗБУТ - споживання газу",
    orders: [
      { created: '08.01.2021', payed: '08.01.2021 13:36' },
      { created: '09.02.2021', payed: '09.02.2021 14:45' },
      { created: '10.03.2021', payed: '10.03.2021 19:31' },
      { created: '09.04.2021', payed: '11.04.2021 10:01' },
      { created: '08.05.2021', payed: '14.05.2021 14:22' },
      { created: '07.06.2021', payed: '' },
      { created: '06.07.2021', payed: '07.07.2021 15:34' },
      { created: '06.08.2021', payed: '14.08.2021 10:19' },
      { created: '07.09.2021', payed: '09.09.2021 23:13' },
      { created: '13.10.2021', payed: '14.10.2021 21:14' },
      { created: '06.11.2021', payed: '07.11.2021 14:37' },
      { created: '07.12.2021', payed: '17.12.2021 14:10' }
    ]
  },
  {
    name: "АТ \"СУМИГАЗ\" - транспортування газу",
    orders: [
      { created: '08.01.2021', payed: '08.01.2021 13:38' },
      { created: '09.02.2021', payed: '09.02.2021 14:35' },
      { created: '10.03.2021', payed: '10.03.2021 19:34' },
      { created: '09.04.2021', payed: '11.04.2021 08:52' },
      { created: '08.05.2021', payed: '14.05.2021 14:23' },
      { created: '07.06.2021', payed: '22.06.2021 17:31' },
      { created: '06.07.2021', payed: '07.07.2021 15:36' },
      { created: '06.08.2021', payed: '14.08.2021 10:17' },
      { created: '07.09.2021', payed: '09.09.2021 23:12' },
      { created: '13.10.2021', payed: '14.10.2021 21:16' },
      { created: '06.11.2021', payed: '07.11.2021 14:38' },
      { created: '14.12.2021', payed: '17.12.2021 14:39' }
    ]
  }  
]

companies.orders = dataConverter(companies);

function dataConverter(arr_obj) {
  //let nArr = new Array();
  //nArr.push(arr_obj.map(c => {
  //return arr_obj.map(c => {
  arr_obj.map(c => {
    //let no = new Object();
    //no.name = c.name;
    c.orders = c.orders.map(({ created, payed }) => ({
      created: new Date(created.toString().substring(6) + '-' + created.toString().substring(3, 5) + '-' + created.toString().substring(0, 2)),
      payed: new Date(payed.substring(6, 10) + '-' + payed.substring(3, 5) + '-' + payed.substring(0, 2) + 'T' + payed.substring(11, 13) + ':' + payed.substring(14) + 'Z')
    }));
    //return no;
  });
  //return nArr;
};

console.dir(companies, { depth: null, colors: true });







import fs from 'fs';

export const getData = (panel: number, csvFile: string) => {
  const dataWay = `./public/${csvFile}.csv`;
  if (!fs.existsSync(dataWay)) {
    return { arrDate: [], arrTime: [], arrAmp: [], arrVolt: [], arrWatt: [], arrProd: [] };
  }
  const arrayData: any[] = [];
  const arrDate: string[] = [];
  const arrTime: string[] = [];
  const arrAmp: number[] = [];
  const arrVolt: number[] = [];
  const arrWatt: number[] = [];
  const arrProd: number[] = [];

  const data = fs.readFileSync(dataWay).toString();
  const fullData = data.split('\n');
  const tableLenght = fullData.length - 2;
  const table = fullData.splice(1, tableLenght);
  table.forEach((row) => {
    const columns = row.split(',');
    const date: string[] = columns[0].split('.');

    const day = +date[0];
    const month = +date[1];
    const year = +('20' + date[2]);

    const dateFormat = new Date(+(20 + date[2]), +date[1] - 1, +date[0]).toLocaleDateString();

    const time = columns[1];

    const amp1 = +columns[2];
    const amp2 = +columns[3];
    const amp3 = +columns[4];
    const v1 = +columns[5];
    const v2 = +columns[6];
    const v3 = +columns[7];

    const amp = [amp1, amp2, amp3];
    const volt = [v1, v2, v3];
    const watt = amp.map((value, index) => +value * +volt[index]); //считаем мощность панелей умножая каждый эллемент amp на volt
    const prod = watt.map((value) => value / (0.1848 * 1.64 * 0.99)); //получаем приход солнечной радицаии учитывая КПД и площадь панелей

    arrDate.push(dateFormat); //d.m.t
    arrTime.push(time);

    arrAmp.push(amp[panel]);
    arrVolt.push(volt[panel]);
    arrWatt.push(watt[panel]);
    arrProd.push(prod[panel]);
    arrayData.push(amp1);
  });
  return { arrDate, arrTime, arrAmp, arrVolt, arrWatt, arrProd };
};

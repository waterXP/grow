import { CHANGE_TYPE, GET_USER_ABILITIES, DRAW_ABILITIES } from '../actions/AbilityAction';
import { FETCH_FAIL, fetchFail } from '../actions/base';

const drawAbilities = function (canvas, data) {
  const length = data.length;
  const degree = 2 * Math.PI / 360 * 360 / length;
  const pX = 150;
  const pY = 120;

  let max = 0;
  let base = 0;
  let exs = [];
  let point = [];
  for (let ability of data) {
    const v = ability.experience / ability.factor;
    max = max < v ? v : max;
    exs.push(v);
  }  
  switch (true) {
    case max > 200:
      base = 400;
      break;
    case max > 100:
      base = 200;
      break;
    case max > 50:
      base = 100;
      break;
    default:
      base = 50;
  }

  const ctx = canvas.getContext('2d');
  if (ctx) {

    ctx.strokeStyle = '#f0f0f0';
    ctx.beginPath();
    for (let i = 0; i < length; i++) {
      const angle = degree * i;
      let x = pX + Math.sin(angle) * 100;
      let y = pY - Math.cos(angle) * 100;      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      point.push({x, y});
    }
    ctx.closePath();
    ctx.stroke();


    
    ctx.fillStyle = '#f2dede';
    ctx.beginPath();
    for (let i = 0; i < length; i++) {
      const angle = degree * i;
      point[i].angle = angle;
      let x = pX + Math.sin(angle) * exs[i] / base * 100;
      let y = pY - Math.cos(angle) * exs[i] / base * 100;      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.fill();

    ctx.font = '14px Verdana';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    for (let i = 0; i < point.length; i++) {
      ctx.save();
      ctx.translate(point[i].x, point[i].y);
      ctx.rotate(point[i].angle);
      ctx.textBaseline = 'bottom';
      ctx.fillText(data[i].name, 0, 0);
      ctx.textBaseline = 'top';
      ctx.fillText(Math.floor(data[i].experience / data[i].factor), 0, 0);
      ctx.restore();
    }
  }
};

const ACTION_HANDLES = {
  [CHANGE_TYPE]: (state, action) => {
    return Object.assign({}, state, {
      viewType: action.newType
    })
  },
  [GET_USER_ABILITIES]: (state, action) => {
    const res = action.response;
    if (res.code === 200) {
      const data = res.data;
      return Object.assign({}, state, {
        list: data
      })
    }
    return state;
  },
  [DRAW_ABILITIES]: (state, action) => {
    const res = action.response;
    if (res.code === 200) {
      const data = res.data;
      drawAbilities(action.target, data);
      return Object.assign({}, state, {
        drawData: data
      })
    }
    return state;
  },
  [FETCH_FAIL]: fetchFail
};

const initialState = {
  viewType: 'canvas',
  list: [],
  drawData: []
};

export default function abilitiesReducer (state = initialState, action) {
  const handler = ACTION_HANDLES[action.type];
  return handler ? handler(state, action) : state;  
};

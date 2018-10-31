import prices from './prices';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const displayCart = history => {
  const display = {
    total: 0,
    items: [],
  };

  if (!history.length > 0) return display;

  const updateItem = (item, modifier) => {
    const nextQuantity = item.quantity + modifier;

    if (nextQuantity === 0) {
      display.items.splice(display.items.indexOf(item), 1);
    } else {
      item.quantity += modifier;
    }
  };

  const addItem = item => {
    display.items.push(item);
  };

  const parseHistory = record => {
    if (!record.hasOwnProperty('item')) return;

    const modifier =
      record.state === 'AddItem' ? 1 : record.state === 'RemoveItem' ? -1 : 0;
    const item = display.items.find(item => item.id === record.item.id);
    const price = prices[record.item.id];
    const name = record.item.id
      .split('_')
      .map(s => capitalize(s))
      .join(' ');

    if (item) {
      updateItem(item, modifier);
    } else {
      addItem({
        id: record.item.id,
        name,
        quantity: modifier,
        price,
      });
    }

    display.total += price * modifier;
  };

  history.forEach(parseHistory);

  return display;
};

export default displayCart;


/**
 * Function that sets CSS for specified pokemon type
 *
 * @param {string} text String that contains Pokemon type
 */
export default function colorSetter(text: string) {
  switch (text) {
    case 'Normal':
      return { background: '#A8A77A', color: 'white' };
    case 'Fire':
      return { background: '#EE8130', color: 'white' };
    case 'Water':
      return { background: '#6390F0', color: 'white' };
    case 'Electric':
      return { background: '#F7D02C', color: 'white' };
    case 'Grass':
      return { background: '#7AC74C', color: 'white' };
    case 'Ice':
      return { background: '#96D9D6', color: 'white' };
    case 'Fighting':
      return { background: '#C22E28', color: 'white' };
    case 'Poison':
      return { background: '#A33EA1', color: 'white' };
    case 'Ground':
      return { background: '#E2BF65', color: 'white' };
    case 'Flying':
      return { background: '#A98FF3', color: 'white' };
    case 'Psychic':
      return { background: '#F95587', color: 'white' };
    case 'Bug':
      return { background: '#A6B91A', color: 'white' };
    case 'Rock':
      return { background: '#B6A136', color: 'white' };
    case 'Ghost':
      return { background: '#735797', color: 'white' };
    case 'Dragon':
      return { background: '#6F35FC', color: 'white' };
    case 'Dark':
      return { background: '#705746', color: 'white' };
    case 'Steel':
      return { background: '#B7B7CE', color: 'white' };
    case 'Fairy':
      return { background: '#D685AD', color: 'white' };
    default:
      return { background: 'white', color: 'white' };
  }
}

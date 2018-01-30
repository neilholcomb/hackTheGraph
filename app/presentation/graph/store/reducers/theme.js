const initialState = {
  selected: 'github'
}

const themes = {
  github: {
    title: 'GitHub',
    colors: ['#eee', '#c6e48b', '#7bc96f', '#239a3b', '#196127']
  },
  lastJedi: {
    title: 'Last Jedi',
    colors: ['#ff8080', '#ff4040', '#ff0000', '#808080', '#000000']
  },
  halloween: {
    title: 'Halloween',
    colors: ['#eeeeee', '#fdf156', '#ffc722', '#ff9711', '#04001b']
  },
  amber: {
    title: 'Amber',
    colors: ['#eeeeee', '#ffecb3', '#ffd54f', '#ffb300', '#ff6f00']
  },
  blue: {
    title: 'Blue',
    colors: ['#eeeeee', '#bbdefb', '#64b5f6', '#1e88e5', '#0d47a1']
  },
  bluegrey: {
    title: 'Blue-Grey',
    colors: ['#eeeeee', '#cfd8dc', '#90a4ae', '#546e7a', '#263238']
  },
  brown : {
    title: 'Brown',
    colors: ['#eeeeee', '#d7ccc8', '#a1887f', '#6d4c41', '#3e2723']
  },
  cyan: {
    title: 'Cyan',
    colors: ['#eeeeee', '#b2ebf2', '#4dd0e1', '#00acc1', '#006064']
  },
  deeporange: {
    title: 'Deep-Orange',
    colors: ['#eeeeee', '#ffccbc', '#ff8a65', '#f4511e', '#bf360c']
  },
  deeppurple: {
    title: 'Deep-Purple',
    colors: ['#eeeeee', '#d1c4e9', '#9575cd', '#5e35b1', '#311b92']
  },
  green: {
    title: 'Green',
    colors: ['#eeeeee', '#c8e6c9', '#81c784', '#43a047', '#1b5e20']
  },
  grey : {
    title: 'Grey',
    colors: ['#eeeeee', '#e0e0e0', '#9e9e9e', '#616161', '#212121']
  },
  indigo: {
    title: 'Indigo',
    colors: ['#eeeeee', '#c5cae9', '#7986cb', '#3949ab', '#1a237e']
  },
  lightblue: {
    title: 'Light-Blue',
    colors: ['#eeeeee', '#b3e5fc', '#4fc3f7', '#039be5', '#01579b']
  },
  lightgreen: {
    title: 'Light-Green',
    colors: ['#eeeeee', '#dcedc8', '#aed581', '#7cb342', '#33691e']
  },
  lime: {
    title: 'Lime',
    colors: ['#eeeeee', '#f0f4c3', '#dce775', '#c0ca33', '#827717']
  },
  orange: {
    title: 'Orange',
    colors: ['#eeeeee', '#ffe0b2', '#ffb74d', '#fb8c00', '#e65100']
  },
  pink: {
    title: 'Pink',
    colors: ['#eeeeee', '#f8bbd0', '#f06292', '#e91e63', '#880e4f']
  },
  purple: {
    title: 'Purple',
    colors: ['#eeeeee', '#e1bee7', '#ba68c8', '#8e24aa', '#4a148c']
  },
  red: {
    title: 'Red',
    colors: ['#eeeeee', '#ffcdd2', '#e57373', '#e53935', '#b71c1c']
  },
  teal: {
    title: 'Teal',
    colors: ['#eeeeee', '#b2dfdb', '#4db6ac', '#00897b', '#004d40']
  },
  mediumYellow: {
    title: 'Medium-Yellow',
    colors: ['#eeeeee', '#fff9c4', '#fff176', '#ffd835', '#f57f17']
  },
  moon: {
    title: 'Moon',
    colors: ['#eeeeee', '#6bcdff', '#00a1f3', '#48009a', '#4f2266']
  },
  psychedelic: {
    title: 'Psychedelic',
    colors: ['#eeeee', '	#fdff00', '#00ff38', '#00f9ff', '#fd00ff']
  },
  yellow: {
    title: 'Yellow',
    colors: ['#eeeeee', '#d7d7a2', '#d4d462', '#e0e03f', '#ffff00']
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'THEME_SELECT_THEME':
      return {
        ...state,
        selected: action.data
      }

    default:
      return state
  }
}

export const getThemes = function() {
  return themes
}

export const getSelectedTheme = function(state) {
  return themes[state.Theme.selected]
}

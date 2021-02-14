const initialState = {
  selected: 'github'
}

const themes = {
  github: {
    title: 'GitHub',
    colors: ['#eee', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  lastJedi: {
    title: 'Last Jedi',
    colors: ['#ff8080', '#ff4040', '#ff0000', '#808080', '#000000'],
    legend: {
      lessText: 'Light Side',
      moreText: 'Dark Side'
    }
  },
  halloween: {
    title: 'Halloween',
    colors: ['#eeeeee', '#fdf156', '#ffc722', '#ff9711', '#04001b'],
    legend: {
      lessText: 'Serene',
      moreText: 'Spooky'
    }
  },
  mcdonalds: {
    title: 'McDonald\'s',
    colors: ['#eeeeee', '#c0fd92', '#40E0D0', '#ffc300', '#dd1021'],
    legend: {
      lessText: 'Ba Da Ba Ba Bah',
      moreText: 'I\'m Lovin\' It!'
    }
  },
  moon: {
    title: 'Moon',
    colors: ['#eeeeee', '#6bcdff', '#00a1f3', '#48009a', '#4f2266'],
    legend: {
      lessText: 'New',
      moreText: 'Full'
    }
  },
  psychedelic: {
    title: 'Psychedelic',
    colors: ['#eeeee', '	#fdff00', '#00ff38', '#00f9ff', '#fd00ff'],
    legend: {
      lessText: 'Normal',
      moreText: 'Trippy'
    }
  },
  primary: {
    title: 'Primary',
    colors: ['#eeeeee','#ffff00', '#00ff00', '#ff0000', '#0000ff'],
    legend: {
      lessText: 'RoseArt',
      moreText: 'Crayola'
    }
  },
  amber: {
    title: 'Amber',
    colors: ['#eeeeee', '#ffecb3', '#ffd54f', '#ffb300', '#ff6f00'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  blue: {
    title: 'Blue',
    colors: ['#eeeeee', '#bbdefb', '#64b5f6', '#1e88e5', '#0d47a1'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  bluegrey: {
    title: 'Blue-Grey',
    colors: ['#eeeeee', '#cfd8dc', '#90a4ae', '#546e7a', '#263238'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  brown : {
    title: 'Brown',
    colors: ['#eeeeee', '#d7ccc8', '#a1887f', '#6d4c41', '#3e2723'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  cyan: {
    title: 'Cyan',
    colors: ['#eeeeee', '#b2ebf2', '#4dd0e1', '#00acc1', '#006064'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  deeporange: {
    title: 'Deep-Orange',
    colors: ['#eeeeee', '#ffccbc', '#ff8a65', '#f4511e', '#bf360c'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  deeppurple: {
    title: 'Deep-Purple',
    colors: ['#eeeeee', '#d1c4e9', '#9575cd', '#5e35b1', '#311b92'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  green: {
    title: 'Green',
    colors: ['#eeeeee', '#c8e6c9', '#81c784', '#43a047', '#1b5e20'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  grey : {
    title: 'Grey',
    colors: ['#eeeeee', '#e0e0e0', '#9e9e9e', '#616161', '#212121'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  indigo: {
    title: 'Indigo',
    colors: ['#eeeeee', '#c5cae9', '#7986cb', '#3949ab', '#1a237e'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  lightblue: {
    title: 'Light-Blue',
    colors: ['#eeeeee', '#b3e5fc', '#4fc3f7', '#039be5', '#01579b'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  lightgreen: {
    title: 'Light-Green',
    colors: ['#eeeeee', '#dcedc8', '#aed581', '#7cb342', '#33691e'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  lime: {
    title: 'Lime',
    colors: ['#eeeeee', '#f0f4c3', '#dce775', '#c0ca33', '#827717'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  orange: {
    title: 'Orange',
    colors: ['#eeeeee', '#ffe0b2', '#ffb74d', '#fb8c00', '#e65100'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  pink: {
    title: 'Pink',
    colors: ['#eeeeee', '#f8bbd0', '#f06292', '#e91e63', '#880e4f'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  purple: {
    title: 'Purple',
    colors: ['#eeeeee', '#e1bee7', '#ba68c8', '#8e24aa', '#4a148c'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  red: {
    title: 'Red',
    colors: ['#eeeeee', '#ffcdd2', '#e57373', '#e53935', '#b71c1c'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  teal: {
    title: 'Teal',
    colors: ['#eeeeee', '#b2dfdb', '#4db6ac', '#00897b', '#004d40'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
  },
  yellow: {
    title: 'Yellow',
    colors: ['#eeeeee', '#d7d7a2', '#d4d462', '#e0e03f', '#ffff00'],
    legend: {
      lessText: 'Less',
      moreText: 'More'
    }
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

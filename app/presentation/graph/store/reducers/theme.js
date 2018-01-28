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

import axios from 'axios'

export default {
  getUserCommitHistory: function(username) {
    return async function(dispatch) {
      dispatch({
        type: 'GRAPH_DATA_LOADING',
        state: true
      })

      const data = await axios
        .get(`http://localhost:2000/commits/${username}`)
        .catch(() => {
          return false
        })

      if (!data) {
        dispatch({
          type: 'GRAPH_DATA_FAILED_TO_LOAD_USER',
          data: {
            username
          }
        })

        return
      }

      dispatch({
        type: 'GRAPH_DATA_LOADED',
        data: {
          username,
          data: data.data
        }
      })
    }
  }
}

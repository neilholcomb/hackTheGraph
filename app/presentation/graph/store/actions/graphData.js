import axios from 'axios'

export default {
  getUserCommitHistory: function(username) {
    return async function(dispatch) {
      dispatch({
        type: 'GRAPH_DATA_LOADING',
        state: true
      })

      const data = await axios.get(`http://localhost:2000/commits/${username}`)

      console.log(data)

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

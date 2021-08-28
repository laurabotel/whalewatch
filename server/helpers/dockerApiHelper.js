const dockerApiHelper = {};
const fetch = require('node-fetch');
const dockerPort = 'http://localhost:2375';

//all docker API calls will go here


//fetch a list of running containers from the docker engine API
dockerApiHelper.getContainerList = () => {

  fetch(`${dockerPort}/containers/json?all=true`)
    .then(result => result.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log('Error in docker helper get container list: ', err))
}

dockerApiHelper.inspectContainer = (id) => {
  fetch(`${dockerPort}/containers/${id}/json?size=true`)
    .then(result => result.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log('Error in docker helper inspect container: ', err))
}

dockerApiHelper.getStats = (id) => {
  fetch(`${dockerPort}/containers/${id}/stats?stream=false`)
    .then(result => result.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log('Error in docker helper inspect container: ', err))
}

dockerApiHelper.startContainer = (id) => {
  fetch(`${dockerPort}/containers/${id}/start`, {
    method: 'POST'
  })
    .then(result => result.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log('Error in docker helper start container: ', err))
}

dockerApiHelper.stopContainer = (id) => {
  fetch(`${dockerPort}/containers/${id}/stop`, {
    method: 'POST'
  })
    .then(result => result.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log('Error in docker helper stop container: ', err))
}

dockerApiHelper.restartContainer = (id) => {
  fetch(`${dockerPort}/containers/${id}/restart`, {
    method: 'POST'
  })
    .then(result => result.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log('Error in docker helper restart container: ', err))
}

dockerApiHelper.removeContainer = (id) => {
  fetch(`${dockerPort}/containers/${id}`, {
    method: 'DELETE'
  })
    .then(result => result.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log('Error in docker helper delete container: ', err))
}


module.exports = dockerApiHelper;
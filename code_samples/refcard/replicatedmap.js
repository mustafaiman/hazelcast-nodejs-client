HazelcastClient.newHazelcastClient().then(client => {
    let map = client.getReplicatedMap('my-replicated-map');
    map.put('key', 'value')
        .then(() => map.get('key'))
        .then(value => console.log('value for key = ' + value));
});

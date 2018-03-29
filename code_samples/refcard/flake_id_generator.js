HazelcastClient.newHazelcastClient().then(function(client){
    let flakeIdGenerator = client.getFlakeIdGenerator('generator');
    flakeIdGenerator.newId()
        .then(value => console.log('New id: ' + value.toString()));
});

HazelcastClient.newHazelcastClient().then(client => {
    let rb = client.getRingbuffer('rb');
    rb.add(100)
        .then(() => rb.headSequence())
        .then(sequence => rb.readOne(sequence))
        .then(value => console.log(value));
});

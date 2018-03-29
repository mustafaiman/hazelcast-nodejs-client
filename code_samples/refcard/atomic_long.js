HazelcastClient.newHazelcastClient().then(client => {
    let atomiclong = client.getAtomicLong('my-atomic-long');
    atomiclong.addAndGet(4)
        .then(value => console.log(value.toNumber()))
        .then(() => atomiclong.decrementAndGet())
        .then(value => console.log(value.toNumber()));
});

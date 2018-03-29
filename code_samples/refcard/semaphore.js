HazelcastClient.newHazelcastClient().then(client => {
    let semaphore = client.getSemaphore('semaphore');
    semaphore.init(1)
        .then(() => semaphore.acquire())
        .then(() => semaphore.availablePermits())
        .then(permits => console.log(permits))
        .then(() => semaphore.release());
});

HazelcastClient.newHazelcastClient().then((client) => {
    let pnCounter = client.getPNCounter('counter');
    pnCounter.addAndGet(5)
        .then(val => console.log('Added 5 to `counter`. Current value is ' + val))
        .then(() => pnCounter.decrementAndGet())
        .then(val => console.log('Decremented `counter`. Current value is ' + val));
});

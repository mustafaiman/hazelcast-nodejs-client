#!/bin/bash

HAZELCAST_TEST_VERSION="3.10-SNAPSHOT"
HAZELCAST_VERSION="3.9.1"

CLASSPATH="hazelcast-${HAZELCAST_VERSION}.jar:hazelcast-${HAZELCAST_TEST_VERSION}-tests.jar"
CMD_CONFIGS="-Dhazelcast.multicast.group=224.206.1.1 -Djava.net.preferIPv4Stack=true"
java ${CMD_CONFIGS} -cp ${CLASSPATH} com.hazelcast.core.server.StartServer > hazelcast-${HAZELCAST_VERSION}-out.log 2>hazelcast-${HAZELCAST_VERSION}-err.log &
SERVER_PID=$!

sleep 8

node map_soak_test.js localhost:5701 > client-out.log 2>client-err.log
echo "Client shutdown"
kill -9 $SERVER_PID

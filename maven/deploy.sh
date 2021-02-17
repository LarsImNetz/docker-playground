#!/bin/bash

if [[ $# -ne 1 ]]; then
  echo "No parameter given."
fi

deploy() {
  local JAR="application/target/demo-application.jar"

  if [[ ! -e ${JAR} ]]; then
    echo "${JAR} does not exist. Must quit."
    exit 1
  fi

  local USERNAME=$1
  local SERVER=$2
  local DESTINATION=demo-application

  echo "Deploy to server: $SERVER"

  USER_AT_SERVER="${USERNAME}@${SERVER}"

  ssh ${USER_AT_SERVER} "mkdir -p ${DESTINATION}"

  scp start.sh ${USER_AT_SERVER}:${DESTINATION}
  scp ${JAR} ${USER_AT_SERVER}:${DESTINATION}
}


case "$1" in
testing)
  USERNAME="drklein"
  SERVER="qa.drklein-ek.it-hps.de"
  deploy ${USERNAME} ${SERVER}
  ;;
production)
  USERNAME="root"
  SERVER="rzsolv171.rz-hypoport.local"
  deploy ${USERNAME} ${SERVER}
  ;;
*)
  echo $"Usage: $0 {testing|production}"
  exit 1
  ;;
esac

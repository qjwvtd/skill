@echo off

  arp -d

  nbtstat -R

ipconfig /flushdns

  echo ~~~~~~~~~~~~~~~~

  echo 清除完成

  pause
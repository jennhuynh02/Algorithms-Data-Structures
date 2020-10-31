def times(activity):
  startTime = 0
  logTimes = []

  onVideo = set([])
  videoTimes = []
  startVideo = 0

  for event in activity:
    if (event[1] == "@login"):
      startTime = event[0]
    elif (event[1] == "@logout"):
      logTimes.append(event[0] - startTime)
      startTime = 0
    elif (event[1] == "@startVideo"):
      if (len(onVideo) == 1):
        startVideo = event[0]
      onVideo.add(event[2])
    elif (event[1] == "@stopVideo"):
      if (len(onVideo) == 2):
        videoTimes.append(event[0] - startVideo)
        startVideo = 0
      onVideo.remove(event[2])

  totalLoginTime = sum(logTimes)
  totalDoubleStreamTime = sum(videoTimes)
  
  return totalLoginTime, totalDoubleStreamTime

activity = [(1, "@login", None),
(5, "@startVideo", "Bob"),
(20, "@startVideo", "Thomas"),
(66, "@stopVideo", "Thomas"),
(70, "@startVideo", "Lily"),
(75, "@stopVideo", "Bob"),
(78, "@stopVideo", "Lily"),
(100, "@logout", None),
(150, "@login", None),
(160, "@startVideo", "Thomas"),
(205, "@stopVideo", "Thomas"),
(210, "@logout", "Thomas")
]

print(times(activity))
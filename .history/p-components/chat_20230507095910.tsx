import Talk from "talkjs"

import { useEffect, useState } from "react"

function MyChatComponent() {
  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false)
  Talk.ready.then(() => markTalkLoaded(true))

  useEffect(() => {
    if (talkLoaded) {
      // Safe to use the SDK here
    }
  }, [talkLoaded])
}

import * as React from 'react';
import { formatSeconds } from '../../utils/format';
import { useState } from 'react';

export default function Timer({timestampSec}) {
    const [time, setTime] = useState(Math.max(0, timestampSec - Date.now() / 1000))
    setInterval(() => setTime(Math.max(0, timestampSec - Math.floor(Date.now() / 1000.0))), 1000)
    return (
        time >= 1 ? formatSeconds(time) : formatSeconds(0)
  );
}
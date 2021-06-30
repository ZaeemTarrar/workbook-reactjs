import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Printer from '../../../utils/console'
import Sketch from 'react-p5'
import 'react-p5/node_modules/p5/lib/p5'
import 'react-p5/node_modules/p5/lib/addons/p5.sound'
import * as p5 from 'p5'
import 'p5/lib/addons/p5.sound'

const Game: React.FC = (): JSX.Element => {
  Printer.set(` Game Component - Direct `).c('gold').b().s(16).write()

  useEffect(() => {
    Printer.set(` Game Component - useEffect`).c('orange').b().s(16).write()
    return () => {
      Printer.set(` Game Component - Destroyed`).c('red').b().s(16).write()
    }
  }, [])

  var song: any

  const preload = (p5: any) => {
    song = p5.loadSound('assets/audio/beep-1.mp3')
  }

  const setup = (p5: any, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef)
    p5.noLoop()
  }

  const draw = (p5: any) => {
    p5.background(0)
  }

  function keyPressed(p5: any) {
    if (p5.keyCode === p5.LEFT_ARROW) {
      if (song != undefined) {
        song.stop()
        song.play()
      }
    }
  }

  return (
    <>
      <Sketch
        preload={preload}
        setup={setup}
        draw={draw}
        keyPressed={keyPressed}
      />
    </>
  )
}

export default Game

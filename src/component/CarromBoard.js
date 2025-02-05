import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const CarromBoard = ({ onGameOver }) => {
    const gameContainer = useRef(null);

    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: gameContainer.current,
            scene: {
                preload: preload,
                create: create,
                update: update,
            }
        };
        new Phaser.Game(config);
    }, []);

    function preload() {
        this.load.image('carrom-board', '/assets/carrom-board.png');
        this.load.image('striker', '/assets/striker.png');
    }

    function create() {
        this.add.image(400, 300, 'carrom-board');
    }

    function update() {}

    return <div ref={gameContainer}></div>;
};

export default CarromBoard;

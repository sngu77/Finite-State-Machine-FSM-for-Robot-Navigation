stateDiagram-v2
    [*] --> FORWARD
    FORWARD --> TURN_180 : front_sensor > proximity_threshold
    TURN_180 --> FORWARD : turn_counter > 20
    TURN_CLOCKWISE --> FOLLOW_WALL : left_sensor < proximity_threshold or turn_counter > 10
    FOLLOW_WALL --> STOP : left_sensor >= proximity_threshold
    STOP --> [*]
    
    state FORWARD {
        direction: Move Forward
        action: set_motor_speed(5.0, 5.0)
    }

    state TURN_180 {
        direction: Rotate 180 degrees
        action: set_motor_speed(-5.0, 5.0)
    }

    state TURN_CLOCKWISE {
        direction: Turn Right
        action: set_motor_speed(5.0, -5.0)
    }

    state FOLLOW_WALL {
        direction: Move Forward along wall
        action: set_motor_speed(5.0, 5.0)
    }

    state STOP {
        direction: Stop Moving
        action: set_motor_speed(0, 0)
    }

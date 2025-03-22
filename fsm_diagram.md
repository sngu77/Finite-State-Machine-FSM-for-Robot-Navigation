```mermaid
stateDiagram-v2
    [*] --> FORWARD
    FORWARD --> TURN_180 : front_sensor > proximity_threshold
    TURN_180 --> FORWARD : turn_counter > 20
    TURN_CLOCKWISE --> FOLLOW_WALL : left_sensor < proximity_threshold or turn_counter > 10
    FOLLOW_WALL --> STOP : left_sensor >= proximity_threshold
    STOP --> [*]

    FORWARD : Move Forward\n(set_motor_speed(5.0, 5.0))
    TURN_180 : Rotate 180°\n(set_motor_speed(-5.0, 5.0))
    TURN_CLOCKWISE : Turn Right\n(set_motor_speed(5.0, -5.0))
    FOLLOW_WALL : Follow Wall\n(set_motor_speed(5.0, 5.0))
    STOP : Stop Moving\n(set_motor_speed(0, 0))

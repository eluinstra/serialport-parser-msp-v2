export const MspCmd = {
  MSP_API_VERSION:                 1,    //out message *
  MSP_FC_VARIANT:                  2,    //out message *
  MSP_FC_VERSION:                  3,    //out message *
  MSP_BOARD_INFO:                  4,    //out message *
  MSP_BUILD_INFO:                  5,    //out message *
  
  MSP_NAME:                        10,   //out message          Returns user set board name - betaflight
  MSP_SET_NAME:                    11,   //in message           Sets board name - betaflight
  
  //
  // MSP commands for Cleanflight original features
  //
  MSP_BATTERY_CONFIG:              32,
  MSP_SET_BATTERY_CONFIG:          33,
  
  MSP_MODE_RANGES:                 34,    //out message         Returns all mode ranges
  MSP_SET_MODE_RANGE:              35,    //in message          Sets a single mode range
  
  MSP_FEATURE_CONFIG:              36,
  MSP_SET_FEATURE_CONFIG:          37,
  
  MSP_BOARD_ALIGNMENT_CONFIG:      38,
  MSP_SET_BOARD_ALIGNMENT_CONFIG:  39,
  
  MSP_CURRENT_METER_CONFIG:        40,
  MSP_SET_CURRENT_METER_CONFIG:    41,
  
  MSP_MIXER_CONFIG:                42,
  MSP_SET_MIXER_CONFIG:            43,
  
  MSP_RX_CONFIG:                   44,
  MSP_SET_RX_CONFIG:               45,
  
  MSP_LED_COLORS:                  46,
  MSP_SET_LED_COLORS:              47,
  
  MSP_LED_STRIP_CONFIG:            48,
  MSP_SET_LED_STRIP_CONFIG:        49,
  
  MSP_RSSI_CONFIG:                 50,
  MSP_SET_RSSI_CONFIG:             51,
  
  MSP_ADJUSTMENT_RANGES:           52,
  MSP_SET_ADJUSTMENT_RANGE:        53,
  
  // private - only to be used by the configurator, the commands are likely to change
  MSP_CF_SERIAL_CONFIG:            54,
  MSP_SET_CF_SERIAL_CONFIG:        55,
  
  MSP_VOLTAGE_METER_CONFIG:        56,
  MSP_SET_VOLTAGE_METER_CONFIG:    57,
  
  MSP_SONAR_ALTITUDE:              58, //out message get sonar altitude [cm]
  
  MSP_PID_CONTROLLER:              59,
  MSP_SET_PID_CONTROLLER:          60,
  
  MSP_ARMING_CONFIG:               61,
  MSP_SET_ARMING_CONFIG:           62,
  
  //
  // Baseflight MSP commands (if enabled they exist in Cleanflight)
  //
  MSP_RX_MAP:                      64, //out message get channel map (also returns number of channels total)
  MSP_SET_RX_MAP:                  65, //in message set rx map, numchannels to set comes from MSP_RX_MAP
  
  // DEPRECATED - DO NOT USE "MSP_BF_CONFIG" and MSP_SET_BF_CONFIG.  In Cleanflight, isolated commands already exist and should be used instead.
  // DEPRECATED - MSP_BF_CONFIG:                   66 //out message baseflight-specific settings that aren't covered elsewhere
  // DEPRECATED - MSP_SET_BF_CONFIG:               67 //in message baseflight-specific settings save
  
  MSP_REBOOT:                      68, //in message reboot settings *
  
  // Use MSP_BUILD_INFO instead
  // DEPRECATED - MSP_BF_BUILD_INFO               69 //out message build date as well as some space for future expansion
  
  MSP_DATAFLASH_SUMMARY:           70, //out message - get description of dataflash chip
  MSP_DATAFLASH_READ:              71, //out message - get content of dataflash chip
  MSP_DATAFLASH_ERASE:             72, //in message - erase dataflash chip
  
  // No-longer needed
  // DEPRECATED - MSP_LOOP_TIME:                   73, //out message         Returns FC cycle time i.e looptime parameter // DEPRECATED
  // DEPRECATED - MSP_SET_LOOP_TIME:               74, //in message          Sets FC cycle time i.e looptime parameter    // DEPRECATED
  
  MSP_FAILSAFE_CONFIG:             75, //out message         Returns FC Fail-Safe settings
  MSP_SET_FAILSAFE_CONFIG:         76, //in message          Sets FC Fail-Safe settings
  
  MSP_RXFAIL_CONFIG:               77, //out message         Returns RXFAIL settings
  MSP_SET_RXFAIL_CONFIG:           78, //in message          Sets RXFAIL settings
  
  MSP_SDCARD_SUMMARY:              79, //out message         Get the state of the SD card
  
  MSP_BLACKBOX_CONFIG:             80, //out message         Get blackbox settings
  MSP_SET_BLACKBOX_CONFIG:         81, //in message          Set blackbox settings
  
  MSP_TRANSPONDER_CONFIG:          82, //out message         Get transponder settings
  MSP_SET_TRANSPONDER_CONFIG:      83, //in message          Set transponder settings
  
  MSP_OSD_CONFIG:                  84, //out message         Get osd settings - betaflight
  MSP_SET_OSD_CONFIG:              85, //in message          Set osd settings - betaflight
  
  MSP_OSD_CHAR_READ:               86, //out message         Get osd settings - betaflight
  MSP_OSD_CHAR_WRITE:              87, //in message          Set osd settings - betaflight
  
  MSP_VTX_CONFIG:                  88, //out message         Get vtx settings - betaflight
  MSP_SET_VTX_CONFIG:              89, //in message          Set vtx settings - betaflight
  
  // Betaflight Additional Commands
  MSP_ADVANCED_CONFIG:             90,
  MSP_SET_ADVANCED_CONFIG:         91,
  
  MSP_FILTER_CONFIG:               92,
  MSP_SET_FILTER_CONFIG:           93,
  
  MSP_PID_ADVANCED:                94,
  MSP_SET_PID_ADVANCED:            95,
  
  MSP_SENSOR_CONFIG:               96,
  MSP_SET_SENSOR_CONFIG:           97,
  
  MSP_CAMERA_CONTROL:              98,
  
  MSP_SET_ARMING_DISABLED:         99,
  
  //
  // OSD specific
  //
  MSP_OSD_VIDEO_CONFIG:            180,
  MSP_SET_OSD_VIDEO_CONFIG:        181,
  
  // External OSD displayport mode messages
  MSP_DISPLAYPORT:                 182,
  
  MSP_COPY_PROFILE:                183,
  
  MSP_BEEPER_CONFIG:               184,
  MSP_SET_BEEPER_CONFIG:           185,
  
  MSP_SET_TX_INFO:                 186, // in message           Used to send runtime information from TX lua scripts to the firmware
  MSP_TX_INFO:                     187, // out message          Used by TX lua scripts to read information from the firmware
  
  //
  // Multwii original MSP commands
  //
  
  // See MSP_API_VERSION and MSP_MIXER_CONFIG
  //DEPRECATED -
  MSP_IDENT:                100,    //out message         mixerMode + multiwii version + protocol version + capability variable
  
  
  MSP_STATUS:               101,    //out message *       cycletime & errors_count & sensor present & box activation & current setting number
  MSP_RAW_IMU:              102,    //out message *       9 DOF
  MSP_SERVO:                103,    //out message         servos
  MSP_MOTOR:                104,    //out message         motors
  MSP_RC:                   105,    //out message         rc channels and more
  MSP_RAW_GPS:              106,    //out message         fix, numsat, lat, lon, alt, speed, ground course
  MSP_COMP_GPS:             107,    //out message         distance home, direction home
  MSP_ATTITUDE:             108,    //out message         2 angles 1 heading
  MSP_ALTITUDE:             109,    //out message         altitude, variometer
  MSP_ANALOG:               110,    //out message *       vbat, powermetersum, rssi if available on RX
  MSP_RC_TUNING:            111,    //out message         rc rate, rc expo, rollpitch rate, yaw rate, dyn throttle PID
  MSP_PID:                  112,    //out message         P I D coeff (9 are used currently)
  // Legacy Multiicommand that was never used.
  //DEPRECATED - MSP_BOX:                  113,    //out message         BOX setup (number is dependant of your setup)
  // Legacy command that was under constant change due to the naming vagueness, avoid at all costs - use more specific commands instead.
  //DEPRECATED - MSP_MISC:                 114,    //out message         powermeter trig
  // Legacy Multiicommand that was never used and always wrong
  //DEPRECATED - MSP_MOTOR_PINS:           115,    //out message         which pins are in use for motors & servos, for GUI
  MSP_BOXNAMES:             116,    //out message         the aux switch names
  MSP_PIDNAMES:             117,    //out message         the PID names
  MSP_WP:                   118,    //out message         get a WP, WP# is in the payload, returns (WP#, lat, lon, alt, flags) WP#0-home, WP#16-poshold
  MSP_BOXIDS:               119,    //out message         get the permanent IDs associated to BOXes
  MSP_SERVO_CONFIGURATIONS: 120,    //out message         All servo configurations.
  MSP_NAV_STATUS:           121,    //out message         Returns navigation status
  MSP_NAV_CONFIG:           122,    //out message         Returns navigation parameters
  MSP_MOTOR_3D_CONFIG:      124,    //out message         Settings needed for reversible ESCs
  MSP_RC_DEADBAND:          125,    //out message         deadbands for yaw alt pitch roll
  MSP_SENSOR_ALIGNMENT:     126,    //out message         orientation of acc,gyro,mag
  MSP_LED_STRIP_MODECOLOR:  127,    //out message         Get LED strip mode_color settings
  MSP_VOLTAGE_METERS:       128,    //out message         Voltage (per meter)
  MSP_CURRENT_METERS:       129,    //out message         Amperage (per meter)
  MSP_BATTERY_STATE:        130,    //out message         Connected/Disconnected, Voltage, Current Used
  MSP_MOTOR_CONFIG:         131,    //out message         Motor configuration (min/max throttle, etc)
  MSP_GPS_CONFIG:           132,    //out message         GPS configuration
  //DEPRECATED - MSP_COMPASS_CONFIG:       133,    //out message         Compass configuration
  MSP_ESC_SENSOR_DATA:      134,    //out message         Extra ESC data from 32-Bit ESCs (Temperature, RPM)
  MSP_GPS_RESCUE:           135,    //out message         GPS Rescues's angle, initialAltitude, descentDistance, rescueGroundSpeed, sanityChecks and minSats
  MSP_GPS_RESCUE_PIDS:      136,    //out message         GPS Rescues's throttleP and velocity PIDS + yaw P
  MSP_VTXTABLE_BAND:        137,    //out message         vtxTable band/channel data
  MSP_VTXTABLE_POWERLEVEL:  138,    //out message         vtxTable powerLevel data
  MSP_MOTOR_TELEMETRY:      139,    //out message         Per-motor telemetry data (RPM, packet stats, ESC temp, etc.)
  
  MSP_SET_RAW_RC:           200,    //in message          8 rc chan
  MSP_SET_RAW_GPS:          201,    //in message          fix, numsat, lat, lon, alt, speed
  MSP_SET_PID:              202,    //in message          P I D coeff (9 are used currently)
  // Legacy multiiwii command that was never used.
  //DEPRECATED - MSP_SET_BOX:              203,    //in message          BOX setup (number is dependant of your setup)
  MSP_SET_RC_TUNING:        204,    //in message          rc rate, rc expo, rollpitch rate, yaw rate, dyn throttle PID, yaw expo
  MSP_ACC_CALIBRATION:      205,    //in message          no param
  MSP_MAG_CALIBRATION:      206,    //in message          no param
  // Legacy command that was under constant change due to the naming vagueness, avoid at all costs - use more specific commands instead.
  //DEPRECATED - MSP_SET_MISC:             207,    //in message          powermeter trig + 8 free for future use
  MSP_RESET_CONF:           208,    //in message          no param
  MSP_SET_WP:               209,    //in message          sets a given WP (WP#,lat, lon, alt, flags)
  MSP_SELECT_SETTING:       210,    //in message          Select Setting Number (0-2)
  MSP_SET_HEADING:          211,    //in message          define a new heading hold direction
  MSP_SET_SERVO_CONFIGURATION: 212,    //in message          Servo settings
  MSP_SET_MOTOR:            214,    //in message          PropBalance function
  MSP_SET_NAV_CONFIG:       215,    //in message          Sets nav config parameters - write to the eeprom
  MSP_SET_MOTOR_3D_CONFIG:  217,    //in message          Settings needed for reversible ESCs
  MSP_SET_RC_DEADBAND:      218,    //in message          deadbands for yaw alt pitch roll
  MSP_SET_RESET_CURR_PID:   219,    //in message          resetting the current pid profile to defaults
  MSP_SET_SENSOR_ALIGNMENT: 220,    //in message          set the orientation of the acc,gyro,mag
  MSP_SET_LED_STRIP_MODECOLOR: 221, //in  message         Set LED strip mode_color settings
  MSP_SET_MOTOR_CONFIG:     222,    //out message         Motor configuration (min/max throttle, etc)
  MSP_SET_GPS_CONFIG:       223,    //out message         GPS configuration
  //DEPRECATED - MSP_SET_COMPASS_CONFIG:   224,    //out message         Compass configuration
  MSP_SET_GPS_RESCUE:       225,    //in message          GPS Rescues's angle, initialAltitude, descentDistance, rescueGroundSpeed, sanityChecks and minSats
  MSP_SET_GPS_RESCUE_PIDS:  226,    //in message          GPS Rescues's throttleP and velocity PIDS + yaw P
  MSP_SET_VTXTABLE_BAND:    227,    //in message          set vtxTable band/channel data (one band at a time)
  MSP_SET_VTXTABLE_POWERLEVEL: 228, //in message          set vtxTable powerLevel data (one powerLevel at a time)
  
  // MSP_BIND:                 240,    //in message          no param
  // MSP_ALARMS:               242,
  
  MSP_EEPROM_WRITE:         250,    //in message          no param
  MSP_RESERVE_1:            251,    //reserved for system usage
  MSP_RESERVE_2:            252,    //reserved for system usage
  MSP_DEBUGMSG:             253,    //out message         debug string buffer
  MSP_DEBUG:                254,    //out message         debug1,debug2,debug3,debug4
  MSP_V2_FRAME:             255,    //MSPv2 payload indicator
  
  // Additional commands that are not compatible with MultiWii
  MSP_STATUS_EX:            150,    //out message         cycletime, errors_count, CPU load, sensor present etc
  MSP_UID:                  160,    //out message         Unique device ID
  MSP_GPSSVINFO:            164,    //out message         get Signal Strength (only U-Blox)
  MSP_GPSSTATISTICS:        166,    //out message         get GPS debugging data
  MSP_MULTIPLE_MSP:         230,    //out message         request multiple MSPs in one request - limit is the TX buffer; returns each MSP in the order they were requested starting with length of MSP; MSPs with input arguments are not supported
  MSP_MODE_RANGES_EXTRA:    238,    //out message         Reads the extra mode range data
  MSP_ACC_TRIM:             240,    //out message         get acc angle trim values
  MSP_SET_ACC_TRIM:         239,    //in message          set acc angle trim values
  MSP_SERVO_MIX_RULES:      241,    //out message         Returns servo mixer configuration
  MSP_SET_SERVO_MIX_RULE:   242,    //in message          Sets servo mixer configuration
  MSP_SET_PASSTHROUGH:      245,    //in message          Sets up passthrough to different peripherals (4way interface, uart, etc...)
  MSP_SET_RTC:              246,    //in message          Sets the RTC clock
  MSP_RTC:                  247,    //out message         Gets the RTC clock
  MSP_SET_BOARD_INFO:       248,    //in message          Sets the board information for this board
  MSP_SET_SIGNATURE:        249,    //in message          Sets the signature of the board and serial number
}

export const mspCmdHeader: string = '$X<'

export const mspMessageType = {
  OUT: "<",
  IN: ">",
  ERROR: "!"
}

export interface MspMsg {
  cmd: number,
  flag: number,
  buffer: number[]
}

export const crc8_dvb_s2 = (crc: number, num: number) => {
  crc = (crc ^ num) & 0xFF
  for (let i = 0; i < 8; i++)
    crc = ((crc & 0x80 & 0xFF) != 0) ? ((crc << 1) ^ 0xD5) & 0xFF : (crc << 1) & 0xFF
  return crc
}

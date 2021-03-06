import MessageType from "./MessageType";
import NetworkMessage from "./NetworkMessage";

export type WorldStatus = {
  players: { id: string }[];
};

export type EngineConfig = {
  updateRate: number;
  networkUpdateRate: number;
};

export type WorldSize = {
  width: number;
  height: number;
};

class ConnectionReplyMessage extends NetworkMessage {
  readonly payload: {
    playerId: string;
    engineConfig: EngineConfig;
    worldStatus: WorldStatus;
    worldSize: WorldSize;
  };

  private constructor(
    playerId: string,
    engineConfig: EngineConfig,
    worldStatus: WorldStatus,
    worldSize: WorldSize
  ) {
    super(MessageType.ConnectionReply);
    this.payload = { playerId, engineConfig, worldStatus, worldSize };
  }

  static create(
    playerId: string,
    engineConfig: EngineConfig,
    worldStatus: WorldStatus,
    worldSize: WorldSize
  ) {
    return new ConnectionReplyMessage(
      playerId,
      engineConfig,
      worldStatus,
      worldSize
    );
  }

  encode = () => {
    return JSON.stringify(this);
  };
}

export default ConnectionReplyMessage;

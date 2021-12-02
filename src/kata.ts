interface KataInterface {
  execute(): boolean;
}

class Kata implements KataInterface {
  execute(): boolean {
    return true;
  }
}

export default Kata;

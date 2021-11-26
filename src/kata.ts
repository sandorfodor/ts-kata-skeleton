interface KataInterface {
  runTests(): boolean;
}

class Kata implements KataInterface {
  runTests(): boolean {
    return true;
  }
}

export default Kata;

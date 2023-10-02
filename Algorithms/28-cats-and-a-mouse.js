function catAndMouse(x, y, z) {
    let distanceCatA = Math.abs(x - z);
    let distanceCatB = Math.abs(y - z);

    if (distanceCatA == distanceCatB) {
        return "Mouse C";
    } else if (distanceCatA < distanceCatB) {
        return "Cat A";
    } else {
        return "Cat B";
    }
}

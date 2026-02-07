public class CommonRoom extends Room {
    public enum Type {
        GYM, LIBRARY, LAUNDRY
    }

    private Type type;

    public CommonRoom(Type type) {
        super();
        this.type = type;
    }

    public Type getType() {
        return type;
    }
}

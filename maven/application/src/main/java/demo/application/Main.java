package demo.application;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Main {

	public static final Logger LOGGER = LoggerFactory.getLogger(Main.class);

	public Main() {
		LOGGER.info("ctor Main");
	}

	private Event eventFromString(String type) {
		if (type.equalsIgnoreCase("play")) {
			return Event.PLAY;
		}
		if (type.equalsIgnoreCase("pause")) {
			return Event.PAUSE;
		}
		if (type.equalsIgnoreCase("stop")) {
			return Event.STOP;
		}
		return Event.STOP;
	}

	public void start(final String type) {
		LOGGER.info("main::start({})", type);

		switch (eventFromString(type)) {
		case PLAY -> System.out.println("User has triggered the play button");
		case STOP, PAUSE -> System.out.println("User needs to relax");
		}
		;
	}

	public static void main(final String[] args) {
		LOGGER.info("public static void main()");

		String type = "";
		if (args.length > 0) {
			type = args[0];
		}
		final Main main = new Main();
		LOGGER.info("main is ok, execute main.start()");
		main.start(type);
	}

}

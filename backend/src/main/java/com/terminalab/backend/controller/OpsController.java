package com.terminalab.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.time.Duration;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/ops")
public class OpsController {

    private final Instant startTime = Instant.now();

    @GetMapping("/info")
    public Map<String, Object> getInfo() {
        Map<String, Object> info = new HashMap<>();
        try {
            InetAddress localHost = InetAddress.getLocalHost();
            info.put("hostname", localHost.getHostName());
            info.put("ip", localHost.getHostAddress());
        } catch (UnknownHostException e) {
            info.put("hostname", "unknown");
            info.put("ip", "unknown");
        }
        info.put("uptime", Duration.between(startTime, Instant.now()).toString());
        info.put("status", "ONLINE");
        return info;
    }

    @GetMapping("/chaos/latency")
    public String triggerLatency() throws InterruptedException {
        Thread.sleep(3000);
        return "Latency injected: 3000ms";
    }

    @GetMapping("/chaos/exception")
    public String triggerException() {
        throw new RuntimeException("Chaos Engineering: Intentional Exception");
    }

    @GetMapping("/chaos/kill")
    public void triggerKill() {
        System.exit(1);
    }
}

/* ============ ICONS (multi-color, flat, theme-independent) ============ */
function icon(name, cls){
  cls = cls || 'icon';
  const M = {
    dashboard:'<rect x="3" y="3" width="7" height="9" rx="1.5" fill="#3b82f6"/><rect x="14" y="3" width="7" height="5" rx="1.5" fill="#f59e0b"/><rect x="14" y="12" width="7" height="9" rx="1.5" fill="#10b981"/><rect x="3" y="16" width="7" height="5" rx="1.5" fill="#a855f7"/>',
    quiz:'<circle cx="12" cy="12" r="9.5" fill="#8b5cf6"/><path d="M9.3 9.2a2.8 2.8 0 0 1 5.4.4c0 1.9-2.7 2.1-2.7 3.9" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="12" cy="17.2" r="1.1" fill="#fbbf24"/>',
    cards:'<path d="M7.5 6.2l10.2-2.8 3.8 11.3-4 1.1z" fill="#fb923c"/><rect x="3" y="7" width="14" height="10" rx="2" fill="#0ea5e9"/><rect x="6" y="10" width="8" height="1.6" rx="0.8" fill="#fff" opacity="0.85"/>',
    pbq:'<path d="M3 20h18" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/><rect x="5.5" y="12" width="3.4" height="7" rx="0.8" fill="#ef4444"/><rect x="10.3" y="7" width="3.4" height="12" rx="0.8" fill="#f59e0b"/><rect x="15.1" y="10" width="3.4" height="9" rx="0.8" fill="#10b981"/>',
    acronym:'<rect x="3" y="4.5" width="18" height="4" rx="1.5" fill="#3b82f6"/><rect x="3" y="10" width="12" height="4" rx="1.5" fill="#f59e0b"/><rect x="3" y="15.5" width="15" height="4" rx="1.5" fill="#10b981"/>',
    tips:'<path d="M12 2.5a6.2 6.2 0 0 0-3.8 11.1c.6.5.9 1.1.9 1.8v0.4h5.8v-.4c0-.7.3-1.3.9-1.8A6.2 6.2 0 0 0 12 2.5z" fill="#fbbf24"/><rect x="9" y="17.5" width="6" height="1.8" rx="0.6" fill="#94a3b8"/><rect x="9.6" y="20" width="4.8" height="1.6" rx="0.6" fill="#64748b"/>',
    settings:'<circle cx="12" cy="12" r="9.4" fill="#64748b"/><circle cx="12" cy="12" r="3.6" fill="#fff"/><circle cx="12" cy="12" r="2.1" fill="#3b82f6"/>',
    shield:'<path d="M12 2.5l7.5 3v6c0 5-3.2 8.6-7.5 9.5-4.3-.9-7.5-4.5-7.5-9.5v-6z" fill="#2563eb"/><path d="M8.4 12.2l2.4 2.4 4.8-4.9" stroke="#fff" stroke-width="1.9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    warn:'<path d="M12 3.2L22.3 21H1.7z" fill="#f59e0b"/><rect x="11.1" y="9.5" width="1.8" height="5.4" rx="0.9" fill="#fff"/><circle cx="12" cy="17.6" r="1.1" fill="#fff"/>',
    lock:'<rect x="4.5" y="10.5" width="15" height="10" rx="2.2" fill="#dc2626"/><path d="M7.5 10.5V7.8a4.5 4.5 0 0 1 9 0v2.7" stroke="#3b82f6" stroke-width="2.2" fill="none" stroke-linecap="round"/><circle cx="12" cy="15.3" r="1.6" fill="#fbbf24"/>',
    data:'<ellipse cx="12" cy="5.2" rx="8" ry="2.8" fill="#3b82f6"/><path d="M4 5.2v13.6c0 1.5 3.6 2.8 8 2.8s8-1.3 8-2.8V5.2" fill="#0ea5e9"/><path d="M4 11.5c0 1.5 3.6 2.8 8 2.8s8-1.3 8-2.8" stroke="#fff" stroke-width="1.3" fill="none" opacity="0.6"/><ellipse cx="12" cy="5.2" rx="8" ry="2.8" fill="#60a5fa"/>',
    ops:'<rect x="1.5" y="15" width="21" height="6" rx="2" fill="#e2e8f0"/><path d="M2 12h4l2-7 4 14 2-7h7" stroke="#ef4444" stroke-width="2.1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    program:'<rect x="3" y="4" width="18" height="17" rx="2.2" fill="#7c3aed"/><rect x="8" y="2" width="8" height="4" rx="1.4" fill="#fbbf24"/><rect x="6" y="10" width="12" height="1.8" rx="0.9" fill="#fff"/><rect x="6" y="14" width="9" height="1.8" rx="0.9" fill="#fff" opacity="0.75"/>',
    check:'<circle cx="12" cy="12" r="9.5" fill="#16a34a"/><path d="M7 12.3l3.4 3.4 6.6-6.9" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    x:'<circle cx="12" cy="12" r="9.5" fill="#dc2626"/><path d="M8.2 8.2l7.6 7.6M15.8 8.2l-7.6 7.6" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>',
    flag:'<rect x="5" y="2.5" width="2" height="19" rx="1" fill="#64748b"/><path d="M7 4h11l-2.6 3.6L18 11.2H7z" fill="#ef4444"/>',
    book:'<path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 0-2 2z" fill="#3b82f6"/><path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 1 2 2z" fill="#f59e0b"/>',
    external:'<rect x="4" y="4" width="13" height="16" rx="2" fill="#e2e8f0"/><path d="M12 4h8v8" stroke="#3b82f6" stroke-width="2.1" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 4L10.5 13.5" stroke="#f59e0b" stroke-width="2.1" stroke-linecap="round"/>',
    refresh:'<path d="M20 11A8 8 0 0 0 6 6.3L3 9" stroke="#3b82f6" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 13a8 8 0 0 0 14 4.7L21 15" stroke="#10b981" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 4v5h5M21 20v-5h-5" stroke="#64748b" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  return '<svg class="'+cls+'" viewBox="0 0 24 24">'+(M[name]||M.shield)+'</svg>';
}
const NAV_LABELS = {dashboard:['dashboard','Dashboard'],quiz:['quiz','Practice Quiz'],flashcards:['cards','Flashcards'],pbq:['pbq','Performance-Based Qs'],labs:['program','Labs'],ptlabs:['pbq','Packet Tracer Labs'],acronyms:['acronym','Acronyms'],studytips:['tips','Study Tips'],settings:['settings','Settings']};
document.querySelectorAll('.nav-link[data-route]').forEach(a=>{
  const r=a.getAttribute('data-route'), [ic,label]=NAV_LABELS[r];
  a.innerHTML = icon(ic)+'<span>'+label+'</span>';
});

/* ============ CCNA DATA ============ */
const DM=[['1.0','Network Infrastructure and Connectivity',25,'ops',[
['1.1','Diagnose interface and cable (copper and fiber) issues such as collisions, errors, mismatched duplex, speed, distance, interface, signal levels, pin out, and cable types'],
['1.2','Describe the role and function of hypervisors, virtual machines, and containers'],
['1.3','Troubleshoot IPv4 address configuration, assignment, and subnetting (public and private)'],
['1.4','Troubleshoot IPv6 address configuration, assignment, and prefix sizing (unicast and modified EUI 64)'],
['1.5','Describe wireless principles'],
['1.6','Troubleshoot wired and wireless client connectivity (IP configuration, network reachability, and wireless security parameters on Windows, MacOS, and Linux)'],
['1.7','Troubleshoot DHCPv4 client, server, and relay on IOS devices']]],
['2.0','Switching and Network Access',25,'data',[
['2.1','Configure network infrastructure connectivity (switch-to-switch and switch-to-router)'],
['2.2','Configure Layer 2 switch port attributes for edge-host connectivity (VLAN, PoE, port channel, and LACP)'],
['2.3','Validate the accuracy of network documentation using CDP and LLDP'],
['2.4','Troubleshoot basic Layer 2/Layer 3 connectivity and device operations using show commands (including show logs), ping, extended ping, trace route, and packet capture output'],
['2.5','Configure operations of the Rapid Per VLAN Spanning Tree Protocol (Rapid PVST+)']]],
['3.0','IP Routing',20,'program',[
['3.1','Interpret a routing table to identify the next hop for a packet (routing protocol, prefix/mask, administrative distance, metric, and default route)'],
['3.2','Troubleshoot IPv4 and IPv6 static routing'],
['3.3','Configure single area OSPFv2 for IPv4 and OSPFv3 for IPv6'],
['3.4','Interpret the operational status of First Hop Redundancy Protocols (HSRP and VRRP)']]],
['4.0','Network Services and Security',20,'shield',[
['4.1','Configure network devices with local usernames and as an AAA client (TACACS+ and RADIUS) for management'],
['4.2','Manage device configuration and software files using secure file transfer operations with SFTP/SCP'],
['4.3','Configure NAT/PAT on IOS XE routers'],
['4.4','Diagnose issues with DNS records (A, AAAA, CNAME, MX, NS, and PTR) to support host, web application, and mail server access by name'],
['4.5','Describe IPsec remote access and site-to-site VPNs (protocols and transport modes)'],
['4.6','Configure IPv4 access control lists (standard, extended, numbered, and named ACLs)'],
['4.7','Configure Layer 2 security features']]],
['5.0','AI, and Network Operations and Management',10,'tips',[
['5.1','Describe the role of agentic AI in network operations'],
['5.2','Select a prompt to send to a generative AI system to support network operations considering prompt components such as data classification, output format, persona, and instructions'],
['5.3','Describe network management approaches (device-based, cloud-based, controller-based, automation-based, and infrastructure as code)'],
['5.4','Describe the function of SNMP in network operations'],
['5.5','Use configuration management mechanisms such as Ansible to execute commands'],
['5.6','Interpret syslog message content, severity levels, and facility']]]];
const DOMAINS=DM.map(d=>({id:d[0],title:d[1],weight:d[2],icon:d[3],objectives:d[4].map(o=>({id:o[0],title:o[1]}))}));
const OBJ_INDEX = {}; DOMAINS.forEach(d=>d.objectives.forEach(o=>{o.domain=d.id; OBJ_INDEX[o.id]=o;}));
const SUBS={'1.5':['a Band and channel selection','b RF characteristics','c Security protocols','d Cause of interference'],'2.1':['a Layer 2/Layer 3 physical interfaces','b Layer 2 802.1Q trunk interfaces','c Layer 2/Layer 3 LACP port-channel/EtherChannel','d Switch virtual interface (SVI)'],'2.2':['a Desktop, printer, and IOT appliances','b Wireless access points (standalone and controller based)','c Voice over IP phone','d Virtualized hosts','e Network appliances'],'2.5':['a Root port, root bridge (primary/secondary), and other port names','b Port states and roles','c PortFast','d Root guard, loop guard, and BPDU guard'],'3.2':['a Default route','b Network route','c Host route','d Floating static'],'3.3':['a Neighbor adjacencies (excluding authentication)','b Point-to-point','c Broadcast (DR/BDR selection)','d Router ID'],'4.7':['a DHCP snooping','b Dynamic ARP inspection','c Storm control','d RA guard','e Port security']};
const NOTES={"1.1":"Check show interfaces for CRC/runts/giants/collisions. Duplex mismatch → late collisions + CRC. Cat5e/6 copper max 100 m; straight-through for unlike devices, crossover for like (Auto-MDIX ignores this). Fiber: multimode short/LED, single-mode long/laser; check dB signal levels (DOM/DDM).","1.2":"Type 1 runs on bare metal (ESXi, KVM); Type 2 on an OS (VirtualBox). VMs have a full guest OS; containers share the host kernel — lighter, faster to start (Docker).","1.3":"Private: 10/8, 172.16/12, 192.168/16. APIPA 169.254/16 = DHCP failed. Hosts = 2^h − 2. Block size = 256 − interesting octet. Verify mask, gateway, same subnet.","1.4":"128-bit hex. Global unicast 2000::/3, link-local FE80::/10, ULA FC00::/7, multicast FF00::/8. Modified EUI-64: split MAC, insert FFFE, flip 7th bit. LAN prefix is /64.","1.5":"2.4 GHz: non-overlapping channels 1/6/11, longer range, more interference (microwaves, Bluetooth). 5 GHz: more channels, shorter range. WPA2 = AES-CCMP; WPA3 = SAE, protected mgmt frames. SSID, RSSI, SNR, co-channel interference.","1.6":"Windows ipconfig /all, Linux ip a / ip r, macOS ifconfig / networksetup. Order: link → IP config → gateway ping → DNS → wireless security params (SSID, PSK/WPA mode).","1.7":"DORA: Discover, Offer, Request, Ack. Server: ip dhcp pool, network, default-router, dns-server, ip dhcp excluded-address. Relay: ip helper-address on the client-facing interface. Check show ip dhcp binding.","2.1":"Trunk: switchport mode trunk, native VLAN, allowed list (802.1Q tag 4 bytes). EtherChannel LACP: channel-group n mode active/passive (active+passive OK; passive+passive fails). SVI: interface vlan N + ip address. Routed port: no switchport.","2.2":"Access port: switchport mode access + access vlan N. Voice: switchport voice vlan N. PoE: power inline auto. APs: access (autonomous) or trunk (FlexConnect). Add portfast for hosts.","2.3":"CDP = Cisco proprietary (show cdp neighbors detail); LLDP = IEEE 802.1AB open standard (lldp run, show lldp neighbors). Used to verify topology docs.","2.4":"show ip int brief, show interfaces, show logging, show ip route, show vlan brief, show mac address-table. ping / extended ping (source, size, repeat), traceroute, packet capture (Wireshark).","2.5":"Lowest bridge ID (priority + MAC) = root. spanning-tree vlan N root primary/secondary. Roles: root, designated, alternate, backup. States: discarding, learning, forwarding. PortFast (edge); BPDU Guard err-disables on BPDU; Root Guard blocks superior BPDUs; Loop Guard stops unidirectional-link loops.","3.1":"Longest prefix match first, then lowest AD, then lowest metric. AD: Connected 0, Static 1, EIGRP 90, OSPF 110, RIP 120. Codes: C, L, S, O, S* (default).","3.2":"ip route net mask next-hop|exit-int; ip route 0.0.0.0 0.0.0.0 … default; /32 host route; floating static = AD higher than the dynamic route (e.g. 130). IPv6: ipv6 route, and ipv6 unicast-routing must be on.","3.3":"Neighbor needs same area, hello/dead, subnet, MTU, unique router ID. DR/BDR on broadcast (priority, then highest RID); none on point-to-point. RID: router-id → highest loopback → highest interface. Cost = 100 Mbps / bw. v3: ipv6 ospf 1 area 0 on interface.","3.4":"Virtual IP shared by routers as default gateway. HSRP (Cisco): Active/Standby, priority 100 default, preempt. VRRP (open): Master/Backup. show standby brief / show vrrp brief.","4.1":"username X secret Y; aaa new-model; RADIUS (UDP, combines authN+authZ, encrypts password only) vs TACACS+ (TCP 49, separates AAA, encrypts whole payload). Use secret not password.","4.2":"Secure transfers of configs/IOS over SSH (TCP 22): copy running-config scp:, ip scp server enable. Avoid TFTP/FTP (cleartext).","4.3":"Static 1:1; dynamic pool; PAT overload (many:1 via ports). ip nat inside/outside on interfaces; ip nat inside source list 1 interface Gi0/0 overload. show ip nat translations.","4.4":"A = IPv4, AAAA = IPv6, CNAME = alias, MX = mail server, NS = name server, PTR = reverse lookup. Test with nslookup / dig.","4.5":"Site-to-site (router↔router) vs remote access (client↔gateway). AH (integrity only) vs ESP (encryption + integrity). Transport mode (payload only) vs tunnel mode (whole packet). IKE phases 1/2.","4.6":"Standard 1–99 (source only, place near destination); extended 100–199 (proto, src, dst, port, place near source). Top-down, implicit deny, wildcard masks. ip access-group N in|out; named: ip access-list extended NAME.","4.7":"DHCP snooping (trusted ports), DAI (uses snooping table), storm control, RA Guard (blocks rogue IPv6 RAs), port security (max MAC, sticky, violation: protect/restrict/shutdown).","5.1":"Agents plan and act toward goals (diagnose, propose or execute changes) using tools, vs. a chatbot that only answers. Keep human approval, least privilege, and audit logs.","5.2":"Strong prompts include persona (“senior network engineer”), instructions, data classification (never paste secrets/PII to public AI — sanitize), and output format (table, JSON, CLI).","5.3":"Device-based (CLI per box), controller-based (Catalyst Center, SDN), cloud-managed (Meraki), automation (scripts/APIs), Infrastructure as Code (declarative, versioned in Git).","5.4":"Manager polls agents; traps/informs are agent-initiated. MIB/OID. v1/v2c community strings (cleartext); v3 auth+priv (secure). UDP 161/162.","5.5":"Agentless over SSH, push model, YAML playbooks, inventory file, idempotent modules (e.g. cisco.ios.ios_config). Compare Puppet/Chef (agent, pull).","5.6":"Levels 0 Emergency, 1 Alert, 2 Critical, 3 Error, 4 Warning, 5 Notice, 6 Info, 7 Debug (lower = worse). Format: %FACILITY-SEVERITY-MNEMONIC: text. logging host x.x.x.x; logging trap level."};
const TAXONOMY={};Object.keys(OBJ_INDEX).forEach(k=>{TAXONOMY[k]=[];if(SUBS[k])TAXONOMY[k].push({label:'Sub-objectives',items:SUBS[k].map(x=>k+'.'+x)});if(NOTES[k])TAXONOMY[k].push({label:'Study notes',items:[NOTES[k]]})});
const PAIRS=`1.1|Late collisions=>Collisions after the first 64 bytes, typically from a duplex mismatch or an over-length cable
1.1|CRC errors=>Frames failing the frame check sequence, often from bad cabling, interference or duplex mismatch
1.1|Runts=>Frames shorter than the 64-byte minimum, commonly produced by collisions
1.1|Straight-through cable=>Pinout used between unlike devices such as a host and a switch when Auto-MDIX is absent
1.1|Crossover cable=>Pinout used between like devices such as two switches when Auto-MDIX is absent
1.1|Single-mode fiber=>Small-core fiber with a laser source for long-distance links
1.1|Err-disabled=>State in which a protection feature, such as port security, has shut a port down
1.2|Type 1 hypervisor=>Installs directly on server hardware, for example ESXi or KVM
1.2|Type 2 hypervisor=>Runs as an application on top of a host operating system
1.2|Virtual machine=>Software computer that runs its own complete guest operating system
1.2|Container=>Isolated process that shares the host kernel and starts in seconds
1.2|Virtual switch=>Software switch that connects VMs to each other and to the physical network
1.3|Private IPv4 space=>10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16, not routable on the Internet
1.3|APIPA=>169.254.0.0/16 address a host gives itself when no DHCP server answers
1.3|Loopback range=>127.0.0.0/8, used to test the local TCP/IP stack
1.3|Default gateway=>Router interface a host uses to reach other subnets
1.3|Multicast range=>224.0.0.0 through 239.255.255.255
1.3|Subnet mismatch=>Host and gateway in different subnets, so the host cannot leave its LAN
1.4|Link-local=>FE80::/10 address valid only on the directly connected link
1.4|Global unicast=>Publicly routable IPv6 addresses from 2000::/3
1.4|Unique local=>FC00::/7 range used for private IPv6 addressing
1.4|Modified EUI-64=>Inserts FFFE into the middle of the MAC and inverts the seventh bit
1.4|Standard LAN prefix length=>/64, which leaves 64 bits for the interface ID
1.4|Solicited-node multicast=>Address built from FF02::1:FF00:0/104 plus the last 24 bits of a unicast address
1.5.a|2.4 GHz band=>Longer range but only three non-overlapping channels: 1, 6 and 11
1.5.a|5 GHz band=>More non-overlapping channels and higher speeds at shorter range
1.5.a|6 GHz band=>Wi-Fi 6E spectrum that requires WPA3 and offers many wide channels
1.5.a|DFS=>Dynamic Frequency Selection, which leaves 5 GHz channels when radar is detected
1.5.a|Channel width=>Wider channels raise throughput but leave fewer non-overlapping channels
1.5.b|RSSI=>Received signal strength indicator, reported in dBm
1.5.b|SNR=>Signal level minus noise floor, where higher means a cleaner link
1.5.b|Attenuation=>Loss of signal strength through distance and obstacles such as walls
1.5.b|dBm=>Power relative to one milliwatt, where values closer to zero are stronger
1.5.b|EIRP=>Transmitter power plus antenna gain minus cable loss
1.5.b|Antenna gain=>Increase in effective signal power in a given direction, measured in dBi
1.5.c|WEP=>Deprecated RC4-based security that is easily cracked
1.5.c|WPA2=>Uses AES-CCMP encryption with a pre-shared key or 802.1X
1.5.c|WPA3=>Replaces the PSK handshake with SAE and mandates protected management frames
1.5.c|SAE=>Simultaneous Authentication of Equals, which resists offline dictionary attacks
1.5.c|802.1X with EAP=>Enterprise wireless authentication that relies on a RADIUS server
1.5.c|Open authentication=>WLAN with no client authentication or encryption
1.5.d|Co-channel interference=>Several APs on the same channel sharing airtime
1.5.d|Adjacent-channel interference=>Overlapping channels, such as 1 and 3, corrupting each other's frames
1.5.d|Microwave oven=>Common non-Wi-Fi noise source in the 2.4 GHz band
1.5.d|Bluetooth=>Short-range radio that shares the 2.4 GHz band with Wi-Fi
1.5.d|Multipath=>Reflected signal copies arriving at different times and distorting reception
1.5.d|Rogue AP=>Unauthorized access point that can interfere with or compromise a WLAN
1.6|ipconfig /all=>Windows command showing complete IP, DNS and DHCP details
1.6|ip addr=>Linux command that lists interface addresses
1.6|ifconfig=>macOS command that shows interface addressing
1.6|nslookup=>Client tool for testing DNS name resolution
1.6|tracert=>Windows command that lists each hop toward a destination
1.6|ipconfig /renew=>Windows command that requests a new DHCP lease
1.6|Gateway ping test=>First reachability check after confirming the local IP configuration
1.7|DORA=>Discover, Offer, Request, Acknowledge: the DHCP exchange order
1.7|ip helper-address=>Interface command that relays client DHCP broadcasts to a remote server as unicast
1.7|ip dhcp excluded-address=>Reserves addresses so the server will not lease them
1.7|default-router=>DHCP pool option that hands clients their gateway
1.7|show ip dhcp binding=>Lists leased addresses with client MAC addresses
1.7|DHCP UDP ports=>67 for the server and 68 for the client
2.1.a|no switchport=>Turns a switch port into a Layer 3 routed port
2.1.a|Access port=>Layer 2 port that carries traffic for a single VLAN
2.1.a|show interfaces status=>Summarizes port status, VLAN, duplex, speed and type
2.1.a|show ip interface brief=>Lists interface IP addresses with line and protocol status
2.1.a|Speed and duplex=>Settings that should match on both ends to avoid errors
2.1.a|description=>Interface command that labels a port for documentation
2.1.b|802.1Q=>IEEE trunking standard that inserts a 4-byte tag
2.1.b|Native VLAN=>VLAN whose frames cross a trunk untagged, VLAN 1 by default
2.1.b|switchport mode trunk=>Forces a port to operate as a trunk
2.1.b|switchport trunk allowed vlan=>Limits which VLANs may cross the trunk
2.1.b|DTP=>Cisco protocol that negotiates trunking, stopped with switchport nonegotiate
2.1.b|Native VLAN mismatch=>Causes CDP warnings and can leak traffic between VLANs
2.1.c|LACP=>IEEE 802.3ad protocol for negotiating EtherChannel
2.1.c|PAgP=>Cisco-proprietary EtherChannel protocol using desirable and auto modes
2.1.c|LACP active=>Mode that initiates EtherChannel negotiation
2.1.c|LACP passive=>Mode that only replies to negotiation
2.1.c|Mode on=>Static EtherChannel with no negotiation protocol
2.1.c|Port-channel interface=>Logical interface that represents the bundle
2.1.d|SVI=>Logical Layer 3 interface for a VLAN
2.1.d|interface vlan 10=>Command that creates the SVI for VLAN 10
2.1.d|SVI up/up requirement=>VLAN exists and at least one active port is in that VLAN
2.1.d|ip routing=>Enables Layer 3 forwarding on a multilayer switch
2.1.d|ip default-gateway=>Gateway setting a Layer 2 switch uses for management traffic
2.1.d|Management SVI=>SVI with an IP address used for remote administration
2.2.a|Access mode=>switchport mode access, used for desktops and printers
2.2.a|PortFast=>Gets edge host ports forwarding immediately
2.2.a|Port security=>Limits the MAC addresses allowed on a host port
2.2.a|IoT VLAN=>Separate VLAN that limits exposure of IoT appliances
2.2.a|Printer addressing=>Static IP or DHCP reservation so users can find it consistently
2.2.b|Autonomous AP=>Configured individually and usually attached to an access port
2.2.b|Lightweight AP=>Managed by a WLC and tunneled using CAPWAP
2.2.b|FlexConnect=>AP mode that needs a trunk to switch client traffic locally by VLAN
2.2.b|CAPWAP=>Tunnel protocol between lightweight APs and the WLC, UDP 5246 and 5247
2.2.b|PoE for APs=>power inline auto, which powers the AP over the Ethernet cable
2.2.b|WLC=>Controller that centrally manages lightweight APs and WLANs
2.2.c|Voice VLAN=>Separate VLAN for IP phone traffic, set with switchport voice vlan
2.2.c|Phone data path=>PC plugged into the phone uses the untagged access VLAN
2.2.c|LLDP-MED or CDP=>Tells the phone which voice VLAN to use
2.2.c|PoE for phones=>Powers the phone without a separate adapter
2.2.c|DSCP EF=>Marking commonly applied to voice traffic for QoS, value 46
2.2.d|Trunk to hypervisor=>Lets VMs in different VLANs share one physical NIC
2.2.d|vSwitch=>Software switch inside the hypervisor host
2.2.d|Port group=>Set of virtual ports sharing a VLAN and policy
2.2.d|LACP to host=>Bundles several server NICs for bandwidth and redundancy
2.2.d|Host management VLAN=>Keeps hypervisor management traffic apart from VM traffic
2.2.e|Firewall connection=>Typically a trunk or routed link carrying multiple zones
2.2.e|Router-on-a-stick=>Subinterfaces on one trunk provide inter-VLAN routing
2.2.e|WLC port=>Often a trunk or LAG carrying AP-management and client VLANs
2.2.e|Appliance management VLAN=>Dedicated VLAN for administering network appliances
2.2.e|Port-channel to appliance=>Adds bandwidth and link redundancy to a firewall or controller
2.3|CDP=>Cisco-proprietary Layer 2 discovery protocol
2.3|LLDP=>IEEE 802.1AB vendor-neutral discovery protocol
2.3|show cdp neighbors detail=>Reveals neighbor IP address, platform and IOS version
2.3|lldp run=>Command that enables LLDP globally
2.3|no cdp run=>Command that disables CDP globally
2.3|CDP timers=>Updates every 60 seconds with a 180-second hold time
2.4|ping=>Tests reachability using ICMP echo
2.4|Extended ping=>Lets you set source address, packet size and repeat count
2.4|traceroute=>Maps the hop path using expiring TTL values
2.4|show logging=>Displays buffered log messages and logging settings
2.4|Packet capture=>Wireshark or SPAN output used to inspect actual frames
2.4|show mac address-table=>Shows which MAC addresses a switch learned on which ports
2.5.a|Root bridge=>Switch with the lowest bridge ID
2.5.a|Root port=>Port on a non-root switch with the best path to the root
2.5.a|Designated port=>Forwarding port that provides a segment's path toward the root
2.5.a|root primary=>Macro that lowers priority so the switch becomes root for a VLAN
2.5.a|root secondary=>Macro that sets priority 28672 for backup root duty
2.5.a|Bridge ID=>Priority (default 32768) plus VLAN ID plus MAC address
2.5.b|Discarding=>RSTP state that replaces blocking and listening
2.5.b|Learning=>State that builds the MAC table but does not forward user frames
2.5.b|Forwarding=>State that sends and receives data frames
2.5.b|Alternate port=>Backup path to the root through a different switch
2.5.b|Backup port=>Redundant path to the same shared segment on the same switch
2.5.b|Rapid PVST+=>Per-VLAN RSTP enabled with spanning-tree mode rapid-pvst
2.5.c|PortFast=>Moves an edge port straight to forwarding
2.5.c|spanning-tree portfast default=>Enables PortFast on all access ports globally
2.5.c|PortFast on switch links=>Risks temporary loops, so it belongs only on edge ports
2.5.c|Edge port=>RSTP term for a port connected to an end host
2.5.c|show spanning-tree interface detail=>Verifies PortFast and port role information
2.5.d|BPDU Guard=>Err-disables a PortFast port that receives a BPDU
2.5.d|Root Guard=>Puts a port in root-inconsistent state when a superior BPDU arrives
2.5.d|Loop Guard=>Stops a port from becoming designated when BPDUs stop arriving
2.5.d|BPDU Filter=>Suppresses sending and receiving BPDUs on a port
2.5.d|UDLD=>Detects unidirectional fiber or copper links
3.1|Longest prefix match=>Most specific matching route is chosen first
3.1|Administrative distance=>Trustworthiness of a route source, where lower is preferred
3.1|Metric=>Value used to compare routes learned by the same protocol
3.1|Gateway of last resort=>Default route shown at the top of the routing table
3.1|S*=>Routing table code for a static candidate default route
3.1|L code=>Local /32 route for the router's own interface address
3.2.a|ip route 0.0.0.0 0.0.0.0=>IPv4 static default route syntax
3.2.a|ipv6 route ::/0=>IPv6 static default route syntax
3.2.a|Default route use=>Sends traffic with no more specific match toward the Internet or core
3.2.a|Stub router=>Router with one exit that is well suited to a default route
3.2.a|Gateway of last resort not set=>Output meaning no default route exists
3.2.b|Network route=>Static route to a specific destination prefix and mask
3.2.b|Next-hop static route=>Static route that depends on a recursive lookup for the next hop
3.2.b|Exit-interface static on Ethernet=>Can force ARP for every destination, so a next hop is preferred
3.2.b|Static route AD=>1 by default
3.2.b|ipv6 unicast-routing=>Must be enabled before a router forwards IPv6 packets
3.2.c|Host route=>Static route with a /32 IPv4 or /128 IPv6 mask
3.2.c|Longest match advantage=>Host routes override broader network routes
3.2.c|Local route=>Router-generated /32 for its own interface IP
3.2.c|ipv6 route 2001:db8::5/128=>Example of an IPv6 host route
3.2.c|Host route use=>Steers traffic for one server or device along a specific path
3.2.d|Floating static=>Backup static route with a higher AD than the primary
3.2.d|Floating static AD choice=>Must exceed the dynamic protocol's AD, such as above 110 for OSPF
3.2.d|Floating route behavior=>Appears in the routing table only when the primary route disappears
3.2.d|Default static AD=>1, which would override OSPF if not raised
3.2.d|ip route with 130 at the end=>Sets AD 130 on a static route
3.3.a|Hello and dead timers=>Must match on neighbors to form an adjacency
3.3.a|Full state=>Final OSPF neighbor state in which databases are synchronized
3.3.a|2-Way state=>State where DROther routers stay with each other on broadcast links
3.3.a|Area ID mismatch=>Prevents OSPF neighbors from forming
3.3.a|show ip ospf neighbor=>Lists neighbors, their state and the DR role
3.3.a|Subnet or MTU mismatch=>Can leave neighbors stuck in ExStart or Exchange
3.3.b|Point-to-point network=>OSPF type with no DR or BDR election
3.3.b|ip ospf network point-to-point=>Changes an interface network type to eliminate DR election
3.3.b|Default Ethernet OSPF type=>Broadcast
3.3.b|Point-to-point timers=>Hello 10 seconds and dead 40 seconds
3.3.b|Point-to-point adjacency=>Neighbors proceed directly to Full
3.3.c|DR=>Router that collects and distributes LSAs on a broadcast segment
3.3.c|BDR=>Standby that takes over if the DR fails
3.3.c|OSPF priority=>Higher value wins DR election, default 1
3.3.c|Priority 0=>Router can never become DR or BDR
3.3.c|224.0.0.6=>Multicast address used to reach the DR and BDR
3.3.c|224.0.0.5=>Multicast address used to reach all OSPF routers
3.3.d|Router ID=>32-bit unique identifier of an OSPF router
3.3.d|router-id command=>Highest-priority source of the router ID
3.3.d|Loopback RID=>Used if no router-id exists, choosing the highest loopback IP
3.3.d|Interface RID=>Last choice, using the highest active interface IP
3.3.d|clear ip ospf process=>Needed to apply a changed router ID
3.4|HSRP=>Cisco first hop redundancy protocol with Active and Standby routers
3.4|VRRP=>Open-standard FHRP with Master and Backup routers
3.4|Virtual IP=>Shared gateway address configured on hosts
3.4|HSRP default priority=>100, with preempt required to retake the active role
3.4|show standby brief=>Command that displays HSRP state
3.4|show vrrp brief=>Command that displays VRRP state
4.1|Local username=>Created with username name secret password
4.1|TACACS+=>Uses TCP 49 and encrypts the entire payload
4.1|RADIUS=>Uses UDP and encrypts only the password
4.1|aaa new-model=>Command that enables AAA on a Cisco device
4.1|Authorization=>Determines what an authenticated user may do
4.1|Accounting=>Records what users did and when
4.2|SCP=>Secure file copy that runs over SSH
4.2|SFTP=>SSH-based file transfer protocol using TCP 22
4.2|TFTP=>Unauthenticated UDP port 69 transfer, not secure
4.2|FTP=>Cleartext transfer using TCP 20 and 21
4.2|ip scp server enable=>Lets an IOS device act as an SCP server
4.2|copy running-config scp:=>Secure way to back up a configuration
4.3|Static NAT=>Permanent one-to-one translation
4.3|Dynamic NAT=>Translation using a pool of public addresses
4.3|PAT=>Many inside hosts share one address using port numbers
4.3|Inside local=>Private address of an inside host
4.3|Inside global=>Public address representing an inside host
4.3|show ip nat translations=>Displays the active NAT table
4.4|A record=>Maps a name to an IPv4 address
4.4|AAAA record=>Maps a name to an IPv6 address
4.4|CNAME record=>Alias that points one name to another name
4.4|MX record=>Identifies the mail server for a domain
4.4|NS record=>Identifies authoritative name servers for a zone
4.4|PTR record=>Maps an IP address back to a name
4.5|Site-to-site VPN=>Permanent tunnel between two gateways connecting networks
4.5|Remote access VPN=>Individual client connects to a gateway
4.5|ESP=>IPsec protocol 50 providing encryption and integrity
4.5|AH=>IPsec protocol 51 providing integrity without encryption
4.5|Tunnel mode=>Encapsulates the entire original IP packet with a new header
4.5|Transport mode=>Protects only the payload and keeps the original header
4.5|IKE=>Negotiates security associations using UDP 500
4.6|Standard ACL=>Matches source address only and is placed near the destination
4.6|Extended ACL=>Matches protocol, source, destination and ports and is placed near the source
4.6|Implicit deny=>Invisible final entry that drops unmatched traffic
4.6|Wildcard mask=>Inverse mask in which 0 bits must match
4.6|Named ACL=>Allows editing entries by sequence number
4.6|ip access-group=>Applies an ACL to an interface inbound or outbound
4.7.a|DHCP snooping=>Blocks DHCP server replies on untrusted ports
4.7.a|DHCP snooping binding table=>Records MAC, IP, VLAN and port for leases
4.7.a|Trusted port=>Port facing the legitimate DHCP server or uplink
4.7.a|Rogue DHCP server=>Attack that DHCP snooping prevents
4.7.a|ip dhcp snooping vlan=>Enables snooping for specified VLANs
4.7.b|Dynamic ARP inspection=>Validates ARP packets against the DHCP snooping table
4.7.b|ARP spoofing=>Attack that poisons caches for man-in-the-middle interception
4.7.b|ip arp inspection vlan=>Enables DAI on a VLAN
4.7.b|DAI trusted port=>Typically uplinks and ports toward other switches
4.7.b|DAI dependency=>Relies on DHCP snooping bindings or static ARP ACLs
4.7.c|Storm control=>Limits broadcast, multicast or unicast traffic with thresholds
4.7.c|storm-control broadcast level=>Sets a percentage threshold for broadcast traffic
4.7.c|Storm control action=>Can shut the port down or send an SNMP trap
4.7.c|Broadcast storm=>Excessive broadcasts that can consume bandwidth and CPU
4.7.c|Suppression=>Traffic above the threshold is dropped for the interval
4.7.d|RA Guard=>Blocks rogue IPv6 Router Advertisements on untrusted ports
4.7.d|Router Advertisement=>ICMPv6 type 134 message that announces a router
4.7.d|Rogue RA attack=>Redirects IPv6 hosts through an attacker's gateway
4.7.d|RA Guard host role=>Drops RA messages received from hosts
4.7.d|RA Guard router role=>Allows RA messages on ports facing legitimate routers
4.7.e|Sticky MAC=>Dynamically learned MAC addresses saved into the running configuration
4.7.e|Violation shutdown=>Default mode that err-disables the port
4.7.e|Violation restrict=>Drops violating frames, logs and counts them but keeps the port up
4.7.e|Violation protect=>Drops violating frames silently without logging
4.7.e|Maximum MAC addresses=>Default is one allowed secure address per port
5.1|Agentic AI=>Systems that plan and take actions toward a goal using tools
5.1|Human in the loop=>Person approves AI-proposed changes before execution
5.1|Least privilege for agents=>Limits the AI's access to only what the task needs
5.1|Hallucination=>Confident but incorrect AI output
5.1|Audit trail=>Logs of AI actions used for accountability
5.2|Persona=>Role assigned to the AI, such as a senior network engineer
5.2|Instructions=>Clear task directions in the prompt
5.2|Data classification=>Determines whether data is safe to include in a prompt
5.2|Output format=>Specifies the response shape, such as table, JSON or CLI
5.2|Sanitizing prompts=>Removing credentials, keys and identifiers before sending data
5.3|Device-based management=>Configuring each device individually, usually by CLI
5.3|Controller-based management=>Central controller such as Catalyst Center pushes policy
5.3|Cloud-based management=>Devices managed through a vendor cloud dashboard such as Meraki
5.3|Automation-based management=>Scripts and APIs apply changes at scale
5.3|Infrastructure as code=>Desired state is stored as versioned files in a repository
5.4|SNMP manager=>NMS that polls devices and receives notifications
5.4|SNMP agent=>Software on a device that exposes data and sends traps
5.4|SNMP trap=>Unsolicited agent notification sent to the manager
5.4|MIB=>Database of objects identified by OIDs
5.4|SNMPv3=>Version that provides authentication and encryption
5.4|Community string=>Cleartext shared secret used by SNMPv1 and v2c
5.5|Ansible=>Agentless automation tool that connects using SSH
5.5|Playbook=>YAML file that defines tasks to run
5.5|Inventory=>List of hosts and groups that Ansible manages
5.5|Idempotent=>Running a task repeatedly leaves the same result
5.5|Module=>Unit of work such as cisco.ios.ios_config
5.6|Syslog severity=>Number from 0 to 7, where lower is more serious
5.6|Facility=>Code that identifies the source category of a message
5.6|Syslog message format=>%FACILITY-SEVERITY-MNEMONIC: message text
5.6|logging host=>Sends logs to a remote syslog server
5.6|Syslog transport=>UDP port 514 by default`;
(function(){
let a=7;const r=()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const sh=x=>{x=[...x];for(let i=x.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[x[i],x[j]]=[x[j],x[i]]}return x};
const P=PAIRS.split('\n').map(l=>{const[t,rest]=l.split('|');const[k,d]=rest.split('=>');return{t,k,d}});
const out=[];const mk=(t,q,right,wrong,e,tf)=>{const o=sh([right,...wrong]);out.push({t,q,o,a:o.indexOf(right),e,tf})};
P.forEach(p=>{const same=P.filter(x=>x.t==p.t&&x!==p),dom=P.filter(x=>x.t[0]==p.t[0]&&x.t!=p.t);
const pick=(arr,f)=>{const m=[];sh(same).forEach(x=>m.length<3&&m.push(f(x)));sh(dom).forEach(x=>m.length<3&&m.push(f(x)));return m};
const ex=p.k+': '+p.d;
mk(p.t,'Which statement best describes: '+p.k+'?',p.d,pick(same,x=>x.d),ex);
mk(p.t,'Which term matches this description? "'+p.d+'"',p.k,pick(same,x=>x.k),ex);
const w=sh(same)[0]||sh(dom)[0];const tr=out.length%2==0;
mk(p.t,'True or false: '+p.k+' — '+(tr?p.d:w.d),tr?'True':'False',[tr?'False':'True'],tr?ex:'False. '+ex,1)});
const H=(t,q,right,wrong,e)=>mk(t,q,String(right),wrong.map(String),e);
const near=(v,n)=>{const s=new Set();[v*2,v/2,v+2,v-2,v*2+2,v+4,v*4].forEach(x=>{if(x!=v&&x>0&&Number.isInteger(x))s.add(x)});return sh([...s]).slice(0,n)};
const f4=n=>[n>>>24,n>>16&255,n>>8&255,n&255].join('.');
const ipn=()=>((192<<24)|(168<<16)|(Math.floor(r()*250)<<8)|(1+Math.floor(r()*250)))>>>0;
const mk32=p=>(0xFFFFFFFF<<(32-p))>>>0;
for(let i=0;i<10;i++){const p=20+Math.floor(r()*11),h=Math.pow(2,32-p)-2;H('1.3','How many usable host addresses are in a /'+p+' subnet?',h,near(h,3),'2^'+(32-p)+' − 2 = '+h+'.')}
for(let i=0;i<10;i++){const n=ipn(),p=24+Math.floor(r()*6),m=mk32(p),net=(n&m)>>>0,bc=(net|~m)>>>0;H('1.3','What is the network address of '+f4(n)+'/'+p+'?',f4(net),[f4(bc),f4(net+1),f4(n),f4((net-(~m>>>0)-1)>>>0)].filter(x=>x!=f4(net)).slice(0,3),'AND the address with the mask: '+f4(net)+'.')}
for(let i=0;i<8;i++){const n=ipn(),p=24+Math.floor(r()*6),m=mk32(p),net=(n&m)>>>0,bc=(net|~m)>>>0;H('1.3','What is the broadcast address of '+f4(n)+'/'+p+'?',f4(bc),[f4(net),f4(bc-1),f4(bc+1),f4(n)].filter(x=>x!=f4(bc)).slice(0,3),'Set all host bits to 1: '+f4(bc)+'.')}
for(let p=17;p<=30;p+=2){const m=f4(mk32(p));H('1.3','What is the subnet mask for /'+p+'?',m,[f4(mk32(p+1)),f4(mk32(p-1)),f4(mk32(p+2))],'/'+p+' = '+m+'.')}
for(let p=25;p<=30;p++){const w=f4(~mk32(p)>>>0);H('4.6','What wildcard mask matches subnet mask '+f4(mk32(p))+'?',w,[f4(~mk32(p+1)>>>0),f4(~mk32(p-1)>>>0),f4(mk32(p)>>>0)],'Wildcard = inverse of the mask: '+w+'.')}
H('4.6','Which wildcard mask matches only a single host?','0.0.0.0',['255.255.255.255','0.0.0.255','255.0.0.0'],'All zero bits must match, so only one address matches.');H('4.6','Which wildcard mask matches any address?','255.255.255.255',['0.0.0.0','0.0.0.255','255.255.255.0'],'All bits are ignored, equal to the any keyword.');
const hx=b=>b.toString(16).toUpperCase().padStart(2,'0');
for(let i=0;i<8;i++){const b=Array.from({length:6},()=>Math.floor(r()*256));b[0]&=0xFC;const e=[b[0]^2,b[1],b[2],0xFF,0xFE,b[3],b[4],b[5]].map(hx),f=x=>x.join('').replace(/(.{4})/g,'$1:').slice(0,-1),mac=b.map(hx).join(':');
const ok=f(e),alt=[f([hx(b[0]),hx(b[1]),hx(b[2]),'FF','FE',hx(b[3]),hx(b[4]),hx(b[5])]),f([hx(b[0]^2),hx(b[1]),hx(b[2]),hx(b[3]),hx(b[4]),hx(b[5]),'FF','FE']),f([hx(b[0]^1),hx(b[1]),hx(b[2]),'FF','FE',hx(b[3]),hx(b[4]),hx(b[5])])];
H('1.4','What is the modified EUI-64 interface ID for MAC '+mac+'?',ok,alt,'Insert FFFE in the middle and flip the seventh bit: '+ok+'.')}
[['Connected',0],['Static',1],['External BGP',20],['EIGRP',90],['OSPF',110],['RIP',120],['Internal EIGRP',170]].forEach(([n,v],i,A)=>H('3.1','What is the default administrative distance of '+n+'?',v,A.filter(x=>x[1]!=v).map(x=>x[1]).slice(i%3,i%3+3).concat(A.filter(x=>x[1]!=v).map(x=>x[1])).slice(0,3),n+' = '+v+'.'));
const SV=['Emergency','Alert','Critical','Error','Warning','Notice','Informational','Debug'];
SV.forEach((n,i)=>H('5.6','Which syslog severity name corresponds to level '+i+'?',n,sh(SV.filter(x=>x!=n)).slice(0,3),'Level '+i+' is '+n+'.'));
[['TACACS+',49,'4.1'],['RADIUS authentication',1812,'4.1'],['SSH, SCP and SFTP',22,'4.2'],['TFTP',69,'4.2'],['DNS',53,'4.4'],['IKE',500,'4.5'],['SNMP polling',161,'5.4'],['SNMP traps',162,'5.4'],['Syslog',514,'5.6'],['DHCP server',67,'1.7']].forEach(([n,v,t])=>H(t,'Which port does '+n+' use by default?',v,[22,23,49,53,67,69,161,162,443,500,514,1812].filter(x=>x!=v).sort(()=>r()-.5).slice(0,3),n+' uses '+v+'.'));
let tf=out.filter(q=>q.tf);while(out.length>800&&tf.length){const k=Math.floor(r()*tf.length),q=tf.splice(k,1)[0];out.splice(out.indexOf(q),1)}
window.QB=out.map((q,i)=>({id:i,...q}));
})();

function genAcronymPBQs(groupSize){
  const buckets = {};
  ACRONYMS.forEach(([acr, full])=>{
    const obj = classifyAcronym(acr, full);
    if(!obj) return; // skip general-reference acronyms with no confident objective match
    (buckets[obj] = buckets[obj] || []).push([acr, full]);
  });
  const out = [];
  Object.entries(buckets).forEach(([objId, entries])=>{
    const shuffled = shuffle(entries);
    for(let i=0; i<shuffled.length; i+=groupSize){
      const group = shuffled.slice(i, i+groupSize);
      if(group.length < 3) continue; // too small to be a meaningful matching exercise
      out.push({
        obj: objId,
        title:'Match the acronym to its meaning — '+objId+' '+OBJ_INDEX[objId].title,
        type:'match',
        pairs: group.map(([a,f])=>[a,f]),
        options: group.map(([,f])=>f)
      });
    }
  });
  return out;
}

const HAND=`1.1|Switch port Gi0/1 shows rising late collisions after one end was set to 100/half and the other to 100/full. What is the most likely cause?=>Duplex mismatch
1.1|A 1000BASE-T link of 140 meters between a switch and a server flaps and logs CRC errors. What is the most likely cause?=>The cable exceeds the 100 m limit
1.1|Two switches are joined with a straight-through cable and Auto-MDIX is disabled on both. The link stays down. What fixes it?=>Replace the cable with a crossover cable
1.1|A fiber link between two buildings 15 km apart needs a laser light source. Which media should be used?=>Single-mode fiber
1.2|An engineer installs a hypervisor directly on a bare-metal server to host several VMs. Which type is this?=>Type 1 hypervisor
1.2|A developer wants lightweight, isolated application instances that share the host kernel and start in seconds. What should be used?=>Containers
1.2|A user runs VirtualBox on a Windows laptop to test a Linux guest. Which type of hypervisor is VirtualBox here?=>Type 2 hypervisor
1.2|A workload needs its own full operating system with strong isolation from other workloads. Which technology fits?=>Virtual machine
1.3|A Windows host boots and shows the address 169.254.33.8. Which address range is this?=>169.254.0.0/16
1.3|Which range is reserved for private use and contains the address 172.20.5.9?=>172.16.0.0/12
1.3|Which range does a host use to test its own TCP/IP stack?=>127.0.0.0/8
1.3|Which range is used for IPv4 multicast traffic?=>224.0.0.0/4
1.4|An interface automatically has an address beginning with FE80. Which type of address is it?=>Link-local
1.4|Which IPv6 prefix covers publicly routable global unicast addresses?=>2000::/3
1.4|Which IPv6 range is the equivalent of private IPv4 addressing?=>FC00::/7
1.4|An engineer wants the interface ID derived from the MAC address with FFFE inserted. Which feature is this?=>Modified EUI-64
1.5.a|A dense office needs the largest number of non-overlapping 20 MHz channels. Which band should be preferred?=>5 GHz band
1.5.a|Which 2.4 GHz channel set avoids overlap between three neighboring APs?=>Channels 1, 6 and 11
1.5.a|A 5 GHz AP moves automatically to a new channel when radar is detected. Which feature is responsible?=>DFS
1.5.a|Combining adjacent channels raises throughput but allows fewer APs to coexist. Which setting was changed?=>Wider channel width
1.5.b|A site survey shows signal weakening as it passes through concrete walls. Which RF characteristic is this?=>Attenuation
1.5.b|A technician compares the received signal level with the noise floor to judge link quality. Which metric is this?=>SNR
1.5.b|A client reports a received signal of -67 dBm. Which metric is being reported?=>RSSI
1.5.b|An engineer adds transmitter power and antenna gain and subtracts cable loss. Which value results?=>EIRP
1.5.c|Which wireless security standard uses SAE and requires protected management frames?=>WPA3
1.5.c|A legacy WLAN that uses RC4 can be cracked within minutes. Which security type is it?=>WEP
1.5.c|An enterprise WLAN requires per-user authentication against a RADIUS server. Which method is used?=>802.1X with EAP
1.5.c|A small office WLAN uses AES-CCMP with a shared passphrase. Which security mode is this?=>WPA2-Personal
1.5.d|Two neighboring APs both use channel 6 and clients see reduced throughput. What is this called?=>Co-channel interference
1.5.d|APs configured on channels 1 and 3 corrupt each other's frames. What is this called?=>Adjacent-channel interference
1.5.d|Wi-Fi drops every time a kitchen appliance runs on a 2.4 GHz network. What is the source?=>Microwave oven
1.5.d|Metal shelving reflects the signal so copies arrive at different times and distort reception. What is this?=>Multipath
1.6|A Windows client cannot reach the Internet. Which command shows its IP address, gateway and DNS servers?=>ipconfig /all
1.6|A Linux client's interface addresses must be listed. Which command is appropriate?=>ip addr
1.6|A Windows user needs to see each hop on the path to a remote server. Which command should be used?=>tracert
1.6|A client pings 8.8.8.8 successfully but cannot open websites by name. Which tool tests name resolution?=>nslookup
1.7|Clients in VLAN 20 are on a different subnet from the DHCP server and receive no address. What is needed on their gateway interface?=>ip helper-address
1.7|An administrator must stop the router from leasing 192.168.1.1 through 192.168.1.10. Which command does this?=>ip dhcp excluded-address 192.168.1.1 192.168.1.10
1.7|Which command shows which client MAC address received which leased IP address?=>show ip dhcp binding
1.7|Clients obtain addresses from a router pool but have no gateway. Which pool command is missing?=>default-router
2.1.a|An engineer needs to turn a switch port into a Layer 3 routed port. Which command is required?=>no switchport
2.1.a|Which command quickly shows each port's status, VLAN, duplex and speed?=>show interfaces status
2.1.a|Which command lists interface IP addresses with line and protocol status?=>show ip interface brief
2.1.a|Which interface command labels a port for documentation?=>description
2.1.b|A trunk carries VLANs 10 and 20 and VLAN 30 must be added without removing the others. Which command is correct?=>switchport trunk allowed vlan add 30
2.1.b|CDP reports a native VLAN mismatch on a trunk. What is the fix?=>Configure the same native VLAN on both ends
2.1.b|A trunk must not send DTP frames. Which command does this?=>switchport nonegotiate
2.1.b|A port must always operate as a trunk. Which command forces this?=>switchport mode trunk
2.1.c|SW1 uses channel-group 1 mode active and SW2 uses mode passive. What is the result?=>The bundle forms using LACP
2.1.c|Both ends use channel-group 1 mode passive. What is the result?=>The bundle does not form because neither side initiates
2.1.c|SW1 uses PAgP desirable and SW2 uses LACP active. What is the result?=>The bundle does not form because the protocols differ
2.1.c|Both ends use channel-group 1 mode on. What is the result?=>The bundle forms statically with no negotiation
2.1.d|An engineer must create a Layer 3 interface for VLAN 10 on a switch. Which command starts this?=>interface vlan 10
2.1.d|The SVI for VLAN 10 is down/down. Which condition is required for it to come up?=>The VLAN exists and has an active port
2.1.d|A multilayer switch must route between its SVIs. Which command enables this?=>ip routing
2.1.d|A Layer 2 switch must be managed from a remote subnet. Which setting is required?=>ip default-gateway
2.2.a|A printer port must belong only to VLAN 30. Which command assigns it?=>switchport access vlan 30
2.2.a|Host ports must begin forwarding immediately when connected. Which feature is used?=>spanning-tree portfast
2.2.a|A desktop port must allow only one learned MAC address. Which feature is used?=>switchport port-security
2.2.a|IoT sensors must be separated from user traffic. What should be done?=>Place them in a dedicated IoT VLAN
2.2.b|A lightweight AP in local mode connects to a switch. Which port type is normally used?=>Access port
2.2.b|An AP in FlexConnect mode switches client traffic locally by VLAN. Which port type is required?=>Trunk port
2.2.b|Which protocol tunnels traffic between a lightweight AP and the WLC?=>CAPWAP
2.2.b|Which command lets the switch power an access point?=>power inline auto
2.2.c|A phone and PC share one port and voice must be in its own VLAN. Which command is used?=>switchport voice vlan 150
2.2.c|An IP phone has no wall adapter. Which switch feature powers it?=>PoE
2.2.c|How does the switch tell the phone which voice VLAN to use?=>CDP or LLDP-MED
2.2.c|Which DSCP marking is commonly applied to voice traffic?=>DSCP EF
2.2.d|A hypervisor host with VMs in VLANs 10 and 20 uses one NIC. Which port mode is needed?=>Trunk port
2.2.d|Two server NICs must be bundled for bandwidth and redundancy. Which feature is used?=>LACP port-channel
2.2.d|Which component connects VMs inside a hypervisor host?=>Virtual switch
2.2.d|Hypervisor administration traffic must stay apart from VM traffic. What should be configured?=>A dedicated management VLAN
2.2.e|A firewall with several security zones uses one physical link. Which connection is appropriate?=>802.1Q trunk
2.2.e|A router with one interface must route between VLANs. Which design is this?=>Router-on-a-stick
2.2.e|A WLC needs more bandwidth and link redundancy. Which feature should connect it?=>Port-channel (LAG)
2.2.e|Network appliances should be administered away from user traffic. What should be used?=>A dedicated management VLAN
2.3|An engineer needs the neighbor switch model and IP address. Which command reveals this on Cisco devices?=>show cdp neighbors detail
2.3|A multivendor network needs neighbor discovery. Which protocol should be used?=>LLDP
2.3|Security policy requires disabling Cisco neighbor discovery globally. Which command does this?=>no cdp run
2.3|Which command enables LLDP globally?=>lldp run
2.4|A technician must test reachability using a specific source interface. Which tool should be used?=>Extended ping
2.4|The path to a server stops responding after several hops. Which tool identifies where it stops?=>traceroute
2.4|An engineer wants to see recent link flap messages. Which command shows them?=>show logging
2.4|Which command shows the port on which a MAC address was learned?=>show mac address-table
2.5.a|An engineer wants this switch to become root for VLAN 10. Which command should be used?=>spanning-tree vlan 10 root primary
2.5.a|Which command makes a switch the backup root for VLAN 10?=>spanning-tree vlan 10 root secondary
2.5.a|On a non-root switch, which port has the lowest cost path to the root?=>Root port
2.5.a|What determines which switch wins the root bridge election?=>Lowest bridge ID
2.5.b|Which RSTP state forwards frames and learns MAC addresses?=>Forwarding
2.5.b|Which port role offers a backup path to the root through a different switch?=>Alternate port
2.5.b|Which RSTP state neither forwards data nor learns MAC addresses?=>Discarding
2.5.b|Which RSTP state builds the MAC table but does not forward user frames?=>Learning
2.5.c|Host-facing ports must skip learning and forward immediately. Which feature is used?=>PortFast
2.5.c|An engineer wants PortFast on all access ports at once. Which command is used?=>spanning-tree portfast default
2.5.c|What does RSTP call a port connected to an end host?=>Edge port
2.5.c|What is the risk of enabling PortFast on a switch-to-switch link?=>Temporary loops
2.5.d|A PortFast port receives a BPDU from a rogue switch and must shut down. Which feature does this?=>BPDU Guard
2.5.d|An engineer must stop a downstream switch from becoming root. Which feature is used?=>Root Guard
2.5.d|A unidirectional link could cause a loop when BPDUs stop arriving. Which feature prevents it?=>Loop Guard
2.5.d|Which feature detects unidirectional fiber failures?=>UDLD
3.1|A packet is sent to 10.1.1.5 and the table has 10.0.0.0/8 and 10.1.1.0/24. Which route is used?=>The /24 route because it is the longest match
3.1|OSPF and a static route both reach the same prefix. Which is installed?=>The static route because its AD is lower
3.1|The routing table shows S* 0.0.0.0/0. What does this represent?=>A static default route used as the gateway of last resort
3.1|Two routes from the same protocol reach one prefix. How is the winner chosen?=>The route with the lowest metric
3.2.a|Which command configures an IPv4 default route through 192.0.2.1?=>ip route 0.0.0.0 0.0.0.0 192.0.2.1
3.2.a|Which command configures an IPv6 default route through 2001:db8::1?=>ipv6 route ::/0 2001:db8::1
3.2.a|A router will not forward IPv6 packets. Which global command is missing?=>ipv6 unicast-routing
3.2.a|A stub router has one exit toward the Internet. Which route type fits best?=>A default route
3.2.b|Which command routes 10.2.2.0/24 through 192.168.1.2?=>ip route 10.2.2.0 255.255.255.0 192.168.1.2
3.2.b|What is the default administrative distance of a static route?=>1
3.2.b|A static route that names only a next hop requires which process?=>A recursive lookup for the next hop
3.2.b|Why is a next-hop IP preferred to an exit interface on Ethernet?=>It avoids ARP for every destination
3.2.c|Which command creates an IPv4 host route to 10.9.9.9?=>ip route 10.9.9.9 255.255.255.255 192.0.2.1
3.2.c|Which command creates an IPv6 host route to 2001:db8::5?=>ipv6 route 2001:db8::5/128 2001:db8::1
3.2.c|Why does a host route override a broader network route?=>Longest prefix match
3.2.c|What is the /32 route labeled L in the routing table?=>The router's own interface address
3.2.d|A backup static route must appear only when the OSPF route fails. Which AD is appropriate?=>130
3.2.d|A floating static route never appears in the table. What is the reason?=>The primary route is still present
3.2.d|A static route with default AD replaces the OSPF route. Which value did it use?=>1
3.2.d|Which rule applies when choosing a floating static AD?=>It must be higher than the dynamic protocol's AD
3.3.a|OSPF neighbors are stuck in ExStart. What is the likely cause?=>MTU mismatch
3.3.a|Two routers form no OSPF adjacency and their hello intervals differ. What must be fixed?=>Matching hello and dead timers
3.3.a|Two OSPF routers on one link are in different areas. What is the result?=>No adjacency forms
3.3.a|Which command lists OSPF neighbors and their states?=>show ip ospf neighbor
3.3.b|Two routers share an Ethernet link and DR election should be avoided. Which command does this?=>ip ospf network point-to-point
3.3.b|What are the default hello and dead timers on a point-to-point link?=>10 and 40 seconds
3.3.b|What is the default OSPF network type on Ethernet?=>Broadcast
3.3.b|On a point-to-point link, neighbors reach which state?=>Full without DR or BDR election
3.3.c|Which router becomes DR on a broadcast segment?=>The router with the highest priority
3.3.c|A router must never become DR or BDR. Which command is used?=>ip ospf priority 0
3.3.c|Which multicast address reaches the DR and BDR?=>224.0.0.6
3.3.c|Which multicast address reaches all OSPF routers?=>224.0.0.5
3.3.d|Which source takes precedence for the OSPF router ID?=>The router-id command
3.3.d|No router-id is configured but loopbacks exist. Which address is used?=>The highest loopback IP
3.3.d|No router-id or loopback exists. Which address is used?=>The highest active interface IP
3.3.d|How is a changed router ID applied?=>clear ip ospf process
3.4|Which first hop redundancy protocol is an open standard with Master and Backup routers?=>VRRP
3.4|Which first hop redundancy protocol is Cisco proprietary with Active and Standby routers?=>HSRP
3.4|Which address do hosts configure as their default gateway with an FHRP?=>The virtual IP address
3.4|Which command displays HSRP group state in brief?=>show standby brief
4.1|Which command creates a local administrator account with a hashed password?=>username admin secret C1sco#123
4.1|Which command enables AAA on a Cisco device?=>aaa new-model
4.1|Which AAA protocol uses TCP and encrypts the entire payload?=>TACACS+
4.1|Which AAA protocol uses UDP and encrypts only the password?=>RADIUS
4.2|Which protocol securely copies files using SSH?=>SCP
4.2|Which protocol is an SSH-based file transfer using TCP 22?=>SFTP
4.2|Which file transfer is unauthenticated and uses UDP 69?=>TFTP
4.2|Which command lets an IOS device act as an SCP server?=>ip scp server enable
4.3|Many inside hosts must share one public address. Which NAT type is used?=>PAT
4.3|A web server needs a permanent one-to-one public address. Which NAT type is used?=>Static NAT
4.3|Inside hosts use a pool of public addresses. Which NAT type is used?=>Dynamic NAT
4.3|Which command displays active NAT translations?=>show ip nat translations
4.4|Email to a domain is not being delivered. Which DNS record is missing or wrong?=>MX record
4.4|www must be an alias of web01.example.com. Which record is used?=>CNAME record
4.4|A host name must resolve to an IPv6 address. Which record is used?=>AAAA record
4.4|A reverse lookup must map an IP address to a name. Which record is used?=>PTR record
4.5|Which IPsec protocol provides encryption and integrity?=>ESP
4.5|Only the payload is protected and the original IP header is kept. Which mode is this?=>Transport mode
4.5|The entire original packet is encapsulated with a new header between two sites. Which mode is this?=>Tunnel mode
4.5|Which protocol negotiates IPsec security associations on UDP 500?=>IKE
4.6|An ACL must filter by source address only and sit close to the destination. Which type is it?=>Standard ACL
4.6|An ACL must match protocol and port numbers and sit close to the source. Which type is it?=>Extended ACL
4.6|Traffic matching no ACL entry is dropped. Which element causes this?=>Implicit deny
4.6|Which command applies ACL 100 to inbound traffic on an interface?=>ip access-group 100 in
4.7.a|A rogue DHCP server is handing out addresses. Which feature blocks it?=>DHCP snooping
4.7.a|Which port type faces the legitimate DHCP server in DHCP snooping?=>Trusted port
4.7.a|Which table records MAC, IP, VLAN and port for leases?=>DHCP snooping binding table
4.7.a|Which command enables DHCP snooping for VLAN 10?=>ip dhcp snooping vlan 10
4.7.b|ARP cache poisoning is occurring. Which feature validates ARP packets?=>Dynamic ARP inspection
4.7.b|Dynamic ARP inspection relies on which data source?=>DHCP snooping bindings
4.7.b|Which command enables DAI for VLAN 10?=>ip arp inspection vlan 10
4.7.b|Which ports are normally trusted for DAI?=>Uplinks to other switches
4.7.c|A broadcast flood is saturating a VLAN. Which feature limits it?=>Storm control
4.7.c|Which command limits broadcast traffic to 20 percent of port bandwidth?=>storm-control broadcast level 20
4.7.c|What can storm control do when a threshold is exceeded?=>Shut the port down or send a trap
4.7.c|What is the term for excessive broadcast traffic that consumes bandwidth and CPU?=>Broadcast storm
4.7.d|A rogue router sends IPv6 Router Advertisements. Which feature blocks them?=>RA Guard
4.7.d|Which ICMPv6 message type is a Router Advertisement?=>Type 134
4.7.d|Which RA Guard role is applied to host-facing ports?=>Host role
4.7.d|Which RA Guard role is applied to ports facing legitimate routers?=>Router role
4.7.e|MAC addresses must be learned dynamically and saved to the running configuration. Which setting is used?=>Sticky
4.7.e|Which violation mode is the default and err-disables the port?=>Shutdown
4.7.e|Violating frames must be dropped and logged while the port stays up. Which mode is this?=>Restrict
4.7.e|Violating frames must be dropped silently while the port stays up. Which mode is this?=>Protect
5.1|An AI system independently diagnoses an outage and proposes remediation steps using tools. What is this called?=>Agentic AI
5.1|Engineers must approve AI-proposed changes before they run. Which control is this?=>Human in the loop
5.1|An AI agent should have only the access its task needs. Which principle is this?=>Least privilege
5.1|An AI assistant confidently cites a command that does not exist. What is this called?=>Hallucination
5.2|A prompt begins by telling the model to act as a senior network engineer. Which component is this?=>Persona
5.2|Passwords and keys are removed before a configuration is pasted into a prompt. Which practice is this?=>Sanitizing the data
5.2|A prompt requests the answer as a table with columns. Which component is this?=>Output format
5.2|Before pasting a configuration into a public AI tool, which factor decides if it is allowed?=>Data classification
5.3|Switches are managed through the Meraki dashboard. Which approach is this?=>Cloud-based management
5.3|Policies are pushed from Catalyst Center. Which approach is this?=>Controller-based management
5.3|An engineer connects to each switch separately by CLI. Which approach is this?=>Device-based management
5.3|Desired network state is stored in versioned files in Git. Which approach is this?=>Infrastructure as code
5.4|A device sends an unsolicited alert to the NMS. Which SNMP message is this?=>Trap
5.4|Which SNMP version provides both authentication and encryption?=>SNMPv3
5.4|Which SNMP versions send the community string in cleartext?=>SNMPv1 and SNMPv2c
5.4|Which structure organizes the objects that an SNMP agent exposes?=>MIB
5.5|Which tool is agentless and pushes configuration to devices over SSH?=>Ansible
5.5|Which Ansible file defines tasks in YAML?=>Playbook
5.5|Which Ansible file lists the hosts and groups to manage?=>Inventory
5.5|Running a module repeatedly leaves the same result. Which property is this?=>Idempotence
5.6|A log shows %LINK-3-UPDOWN. What severity name does level 3 represent?=>Error
5.6|A log shows %SEC_LOGIN-4-LOGIN_FAILED. What severity name does level 4 represent?=>Warning
5.6|In %OSPF-5-ADJCHG, which part identifies the originating feature?=>The facility, OSPF
5.6|Which command sends log messages to a remote syslog server?=>logging host 192.0.2.50`;
(function(){
let a=11;const r=()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const sh=x=>{x=[...x];for(let i=x.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[x[i],x[j]]=[x[j],x[i]]}return x};
const ri=(n,m)=>n+Math.floor(r()*(m-n+1)),pk=x=>x[Math.floor(r()*x.length)];
const out=[],seen=new Set();
const mk=(t,q,right,wr,e)=>{right=String(right);wr=[...new Set(wr.map(String))].filter(x=>x!==right).slice(0,3);if(wr.length<3||seen.has(q))return false;seen.add(q);const o=sh([right,...wr]);out.push({t,q,o,a:o.indexOf(right),e});return true};
const pre=s=>'<pre style="background:var(--bg-sunken);padding:10px;border-radius:8px;overflow:auto;font-size:.8rem;margin:8px 0">'+s+'</pre>';
const f4=n=>[n>>>24,n>>16&255,n>>8&255,n&255].join('.'),m32=p=>p?(0xFFFFFFFF<<(32-p))>>>0:0,ip4=(a,b,c,d)=>((a<<24)|(b<<16)|(c<<8)|d)>>>0;
const hx=n=>n.toString(16).padStart(2,'0');
// hand-written scenario items: distractors are the other answers of the same objective
const byT={};HAND.split('\n').forEach(l=>{const[t,rest]=l.split('|'),[q,an]=rest.split('=>');(byT[t]=byT[t]||[]).push({q,an})});
Object.keys(byT).forEach(t=>byT[t].forEach(x=>mk(t,x.q,x.an,sh(byT[t].filter(y=>y!==x).map(y=>y.an)),'The best answer is "'+x.an+'" (objective '+t+').')));
const G={};
G.g1=()=>{const N=ri(10,1000),hb=Math.ceil(Math.log2(N+2)),p=32-hb;mk('1.3','A network engineer must subnet '+ri(10,172)+'.'+ri(0,255)+'.0.0 so that every subnet supports at least '+N+' hosts while allowing the most subnets possible. Which prefix length should be used?','/'+p,['/'+(p+1),'/'+(p-1),'/'+(p+2)],'Need '+hb+' host bits: 2^'+hb+' − 2 = '+(Math.pow(2,hb)-2)+' usable hosts, leaving /'+p+'.')};
G.g2=()=>{const p=ri(24,29),n=ip4(192,168,ri(0,255),0)>>>0,net=(n&m32(p))>>>0,sz=Math.pow(2,32-p),bc=net+sz-1,h=net+ri(1,sz-2);mk('1.3','Which IP address can be assigned to a host on the '+f4(net)+'/'+p+' network?',f4(h),[f4(net),f4(bc),f4(bc+1)],'Usable range: '+f4(net+1)+' to '+f4(bc-1)+'.')};
G.g3=()=>{const p=ri(25,28),sz=Math.pow(2,32-p),c=ri(0,255),net=ip4(192,168,c,0)+ri(0,Math.floor(256/sz)-1)*sz,same=r()<.5,h1=net+ri(1,sz-2),h2=same?net+ri(1,sz-2):net+sz+ri(1,sz-2);if(h1==h2)return;const S='Yes, both addresses are in the same subnet',D='No, they are in different subnets and need a router';mk('1.3','PC1 ('+f4(h1)+') and PC2 ('+f4(h2)+') connect to the same switch and both use mask '+f4(m32(p))+'. No default gateway is configured. Can they communicate directly?',same?S:D,[same?D:S,'No, the switch blocks traffic between different hosts','Yes, any two private addresses can communicate directly'],'Compare the network portions after applying /'+p+'.')};
G.g4=()=>{const b2=ri(1,200),b3=ri(1,200),nh=sh([11,12,13,14]).map(k=>'192.0.2.'+k),d=ri(0,3),tail=ri(2,250);const dest=[ '172.16.'+ri(0,255)+'.'+tail,'10.'+(b2+1)+'.'+ri(0,255)+'.'+tail,'10.'+b2+'.'+(b3+1)+'.'+tail,'10.'+b2+'.'+b3+'.'+tail][d];
const t=pre('S*   0.0.0.0/0 [1/0] via '+nh[0]+'\nO    10.0.0.0/8 [110/20] via '+nh[1]+'\nO    10.'+b2+'.0.0/16 [110/30] via '+nh[2]+'\nO    10.'+b2+'.'+b3+'.0/24 [110/40] via '+nh[3]);mk('3.1','Refer to the routing table. Which next hop does the router use for a packet destined to '+dest+'?'+t,nh[d],nh.filter((_,i)=>i!=d),'The most specific matching prefix wins (longest prefix match).')};
G.g5=()=>{const P=[['static',1],['EIGRP',90],['OSPF',110],['RIP',120]],i=ri(0,3);let j=ri(0,3);if(i==j)return;const A=P[i],B=P[j],w=A[1]<B[1]?A:B,lab=x=>'The '+x[0]+' route';mk('3.1','A router learns 10.'+ri(0,250)+'.0.0/16 from two sources: '+A[0]+' with metric '+ri(1,200)+' and '+B[0]+' with metric '+ri(1,200)+'. Which route is installed in the routing table?',lab(w),P.filter(x=>x!=w).map(lab).slice(0,3),'The lower administrative distance wins; '+w[0]+' has AD '+w[1]+'.')};
G.g6=k=>{const nh='10.0.'+ri(0,9)+'.'+ri(1,254);if(k==0){mk('3.2.a','Which command configures an IPv4 default route through '+nh+'?','ip route 0.0.0.0 0.0.0.0 '+nh,['ip route 0.0.0.0 255.255.255.255 '+nh,'ip route 255.255.255.255 0.0.0.0 '+nh,'ip default-route '+nh],'A default route uses destination 0.0.0.0 with mask 0.0.0.0.')}
else if(k==1){const p=ri(24,29),n=f4((ip4(172,16,ri(0,255),0)&m32(p))>>>0);mk('3.2.b','Which command creates a static route to the '+n+'/'+p+' network through '+nh+'?','ip route '+n+' '+f4(m32(p))+' '+nh,['ip route '+n+' '+f4(~m32(p)>>>0)+' '+nh,'ip route '+nh+' '+f4(m32(p))+' '+n,'ip route '+n+' 255.255.255.255 '+nh],'Use the destination, its subnet mask, then the next hop.')}
else{const h='192.168.'+ri(0,255)+'.'+ri(1,254);mk('3.2.c','Which command creates a host route to '+h+' through '+nh+'?','ip route '+h+' 255.255.255.255 '+nh,['ip route '+h+' 0.0.0.0 '+nh,'ip route '+h+' 255.255.255.0 '+nh,'ip route '+h+' 255.255.255.254 '+nh],'A host route uses a /32 mask (255.255.255.255).')}};
G.g7=bd=>{const R=[1,2,3,4].map(i=>({n:'R'+i,p:pk([0,1,50,100,150,200]),id:ri(1,9)+'.'+ri(1,9)+'.'+ri(1,9)+'.'+ri(1,9)}));if(new Set(R.map(x=>x.id)).size<4)return;const v=x=>x.id.split('.').reduce((s,y)=>s*256+ +y,0),el=R.filter(x=>x.p>0).sort((x,y)=>y.p-x.p||v(y)-v(x));if(el.length<2)return;const w=el[bd?1:0];mk('3.3.c','Four routers boot at the same time on one Ethernet segment: '+R.map(x=>x.n+' (priority '+x.p+', RID '+x.id+')').join(', ')+'. Which router becomes the '+(bd?'BDR':'DR')+'?',w.n,R.filter(x=>x!=w).map(x=>x.n),'Highest priority wins, then highest router ID; priority 0 is ineligible.')};
G.g8=()=>{const used=new Set(),u=()=>{let x;do{x=ip4(10,ri(0,9),ri(0,9),ri(1,250))}while(used.has(x));used.add(x);return x},ty=ri(0,2),lo=[u(),u()],ifs=[u(),u(),u(),u()],mx=x=>Math.max(...x),mn=x=>Math.min(...x),man=u();
if(ty==0)mk('3.3.d','An OSPF router has router-id '+f4(man)+' configured, Loopback0 '+f4(lo[0])+', Loopback1 '+f4(lo[1])+' and active interface '+f4(ifs[0])+'. Which router ID does it use?',f4(man),[f4(mx(lo)),f4(mn(lo)),f4(ifs[0])],'A manually configured router-id always takes precedence.');
else if(ty==1)mk('3.3.d','No router-id is configured. Loopback0 is '+f4(lo[0])+', Loopback1 is '+f4(lo[1])+', and active interfaces are '+f4(ifs[0])+' and '+f4(ifs[1])+'. Which router ID is chosen?',f4(mx(lo)),[f4(mn(lo)),f4(mx([ifs[0],ifs[1]])),f4(mn([ifs[0],ifs[1]]))],'Without a router-id, the highest loopback IP is used.');
else mk('3.3.d','No router-id or loopback exists. Active interfaces are '+f4(ifs[0])+' and '+f4(ifs[1])+'; shutdown interfaces are '+f4(ifs[2])+' and '+f4(ifs[3])+'. Which router ID is chosen?',f4(mx([ifs[0],ifs[1]])),[f4(mn([ifs[0],ifs[1]])),f4(mx([ifs[2],ifs[3]])),f4(mn([ifs[2],ifs[3]]))],'The highest IP on an active (up) interface is used.')};
G.g9=()=>{const S=[10,100,1000],c=x=>Math.max(1,Math.floor(100/x)),s=[pk(S),pk(S),pk(S)],t=s.reduce((z,x)=>z+c(x),0);mk('3.1','OSPF uses its default reference bandwidth of 100 Mbps. What is the total cost of a path that crosses '+s.map(x=>x+' Mbps').join(', ')+' links?',t,[t+1,t+10,Math.max(1,t-1)],'Cost = 100 / bandwidth (minimum 1): '+s.map(c).join(' + ')+' = '+t+'.')};
G.g10=()=>{const p=ri(24,29),n=f4((ip4(172,16,ri(0,255),0)&m32(p))>>>0);mk('4.6','Which access list entry permits only hosts in the '+n+'/'+p+' subnet to any destination?','permit ip '+n+' '+f4(~m32(p)>>>0)+' any',['permit ip '+n+' '+f4(m32(p))+' any','permit ip host '+n+' any','permit ip '+n+' '+f4(~m32(p-1)>>>0)+' any'],'ACLs use wildcard masks, the inverse of the subnet mask.')};
G.g10b=()=>{const c=ri(1,250),H=ri(10,60),O=ri(61,120),r2=r(),who=ri(0,2),src=who==0?'192.168.'+c+'.'+H:who==1?'192.168.'+c+'.'+O:'192.168.'+(c+1)+'.'+O,ans=who==0?'Denied by line 10':who==1?'Permitted by line 20':'Denied by the implicit deny';
mk('4.6','Refer to the ACL applied inbound. A packet arrives from '+src+'. What happens?'+pre('access-list 10 deny host 192.168.'+c+'.'+H+'\naccess-list 10 permit 192.168.'+c+'.0 0.0.0.255').replace('access-list 10 deny','10 deny').replace('access-list 10 permit','20 permit'),ans,['Denied by line 10','Permitted by line 20','Denied by the implicit deny','Permitted by line 10'],'ACL entries are processed top-down; unmatched traffic hits the implicit deny.')};
const eui=(mac,pf)=>{const b=mac.map(x=>x);b[0]^=2;return pf+':'+[b[0]*256+b[1],b[2]*256+0xFF,0xFE*256+b[3],b[4]*256+b[5]].map(x=>x.toString(16)).join(':')};
G.g11=()=>{const b=Array.from({length:6},()=>ri(0,255));b[0]&=0xFC;const mac=hx(b[0])+hx(b[1])+'.'+hx(b[2])+hx(b[3])+'.'+hx(b[4])+hx(b[5]),pf='2001:db8:'+ri(1,255).toString(16)+':'+ri(1,255).toString(16),ok=eui(b,pf),b2=b.slice();const g=(arr,fl)=>{const x=arr.slice();x[0]^=fl;return pf+':'+[x[0]*256+x[1],x[2]*256+0xFF,0xFE*256+x[3],x[4]*256+x[5]].map(y=>y.toString(16)).join(':')};
mk('1.4','Interface Gi0/0 has MAC address '+mac+' and is configured with ipv6 address '+pf+'::/64 eui-64. Which address does it receive?',ok,[g(b,0),g(b,1),pf+':'+[b[0]*256+b[1],b[2]*256+b[3],b[4]*256+b[5],0xFFFE].map(y=>y.toString(16)).join(':')],'Insert FFFE in the middle of the MAC and flip the seventh bit of the first byte.')};
G.g12=()=>{const L=pk([[1,2,3],[2,3,4],[4,5,6]]),S=L[0]==4?[1,2]:[5,6],g=Array.from({length:8},()=>ri(1,0xFFFF)),h=x=>x.toString(16);if(L[0]==1)S.splice(0,2,5,6);L.forEach(i=>g[i]=0);S.forEach(i=>g[i]=0);const full=g.map(x=>x.toString(16).padStart(4,'0')).join(':'),s=g.map(h);
const cm=(run)=>{const x=s.slice();return x.slice(0,run[0]).join(':')+'::'+x.slice(run[run.length-1]+1).join(':')};const ok=cm(L),w1=cm(S),w2=s.map((v,i)=>L.includes(i)||S.includes(i)?'':v).join(':').replace(/:{2,}/g,'::'),w3=s.join(':');
mk('1.4','Which is the correct shortest valid form of the IPv6 address '+full+'?',ok.replace(/^:{2}/,'::'),[w1,w3,s.slice(0,L[0]).join(':')+'::'+s.slice(L[L.length-1]+1,S[0]).join(':')+'::'+s.slice(S[S.length-1]+1).join(':')],'Remove leading zeros and replace only the longest run of all-zero groups with :: once.')};
G.g13=()=>{const all=[10,20,30,40,50,99],cur=sh(all).slice(0,ri(2,3)).sort((x,y)=>x-y),N=ri(60,900);mk('2.1.b','Trunk Gi0/1 currently allows VLANs '+cur.join(',')+'. VLAN '+N+' must also cross the trunk without disrupting the others. Which command is correct?','switchport trunk allowed vlan add '+N,['switchport trunk allowed vlan '+N,'switchport trunk native vlan '+N,'switchport access vlan '+N],'The add keyword appends; omitting it replaces the allowed list.')};
const SM=[['LINK','3','UPDOWN','%LINK-3-UPDOWN: Interface GigabitEthernet0/2, changed state to down'],['LINEPROTO','5','UPDOWN','%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/2, changed state to up'],['OSPF','5','ADJCHG','%OSPF-5-ADJCHG: Process 1, Nbr 2.2.2.2 on GigabitEthernet0/0 from LOADING to FULL'],['SYS','5','CONFIG_I','%SYS-5-CONFIG_I: Configured from console by admin'],['SEC_LOGIN','4','LOGIN_FAILED','%SEC_LOGIN-4-LOGIN_FAILED: Login failed from 10.1.1.9'],['SYS','2','MALLOCFAIL','%SYS-2-MALLOCFAIL: Memory allocation of 65536 bytes failed'],['SYS','6','LOGGINGHOST_STARTSTOP','%SYS-6-LOGGINGHOST_STARTSTOP: Logging to host 192.0.2.50 port 514 started'],['SW_MATM','4','MACFLAP_NOTIF','%SW_MATM-4-MACFLAP_NOTIF: Host 0011.2233.4455 in vlan 10 is flapping']];
const SV=['Emergency','Alert','Critical','Error','Warning','Notice','Informational','Debug'];
G.g14=(k,i)=>{const m=SM[i];if(k==0)mk('5.6','Refer to the log message: '+m[3]+' What is its severity name?',SV[+m[1]],SV.filter(x=>x!=SV[+m[1]]),'The number '+m[1]+' in the message is the severity level, '+SV[+m[1]]+'.');else if(k==1)mk('5.6','Refer to the log message: '+m[3]+' Which part is the facility?',m[0],SM.map(x=>x[0]).filter(x=>x!=m[0]),'The first field after the percent sign is the facility.');else mk('5.6','Refer to the log message: '+m[3]+' What is the mnemonic?',m[2],SM.map(x=>x[2]).filter(x=>x!=m[2]),'The mnemonic is the final field before the colon.')};
G.g15=()=>{const n=ri(3,4),P=[4096,8192,24576,28672,32768],S=Array.from({length:n},(_,i)=>({n:'SW'+(i+1),p:pk(P),m:ri(1,255)*65536+ri(0,65535)})),w=S.slice().sort((x,y)=>x.p-y.p||x.m-y.m)[0];if(S.filter(x=>x.p==w.p&&x.m==w.m).length>1)return;const mh=x=>'00'+hx(x.m>>16)+'.'+hx(x.m>>8&255)+hx(x.m&255)+'.0001';mk('2.5.a','Refer to the switches in one VLAN: '+S.map(x=>x.n+' (priority '+x.p+', MAC '+mh(x)+')').join(', ')+'. Which switch becomes root bridge?',w.n,S.filter(x=>x!=w).map(x=>x.n).concat(['None, the highest MAC wins']),'The lowest priority wins; on a tie the lowest MAC address wins.')};
const EC=[['active','active','The bundle forms using LACP'],['active','passive','The bundle forms using LACP'],['passive','active','The bundle forms using LACP'],['passive','passive','The bundle does not form'],['desirable','desirable','The bundle forms using PAgP'],['desirable','auto','The bundle forms using PAgP'],['auto','desirable','The bundle forms using PAgP'],['auto','auto','The bundle does not form'],['on','on','The bundle forms statically'],['on','active','The bundle does not form'],['active','on','The bundle does not form'],['desirable','active','The bundle does not form'],['passive','auto','The bundle does not form'],['on','desirable','The bundle does not form']];
G.g16=i=>{const c=EC[i];mk('2.1.c','SW1 is configured with channel-group 1 mode '+c[0]+' and SW2 with channel-group 1 mode '+c[1]+' on two connected links. What is the result?',c[2],['The bundle forms using LACP','The bundle forms using PAgP','The bundle forms statically','The bundle does not form'],'LACP needs at least one active end, PAgP at least one desirable end, and on only pairs with on.')};
G.g17=k=>{const il='192.168.'+ri(0,9)+'.'+ri(2,250),ig='203.0.113.'+ri(2,250),og='198.51.100.'+ri(2,250),pt=ri(1025,60000),t=pre('Pro Inside global      Inside local       Outside local      Outside global\ntcp '+ig+':'+pt+'  '+il+':'+pt+'  '+og+':80  '+og+':80'),ac=['Inside local','Inside global','Outside global'][k],an=[il,ig,og][k];mk('4.3','Refer to the NAT table. Which address is the '+ac.toLowerCase()+' address?'+t,an,[il,ig,og,'10.0.0.'+ri(1,254)],'Inside local is the private host address; inside global is its translated public address; outside is the remote server.')};
G.g18=i=>{const md=['shutdown','restrict','protect'][i%3],mx=ri(1,4),O=['The port is err-disabled','Violating frames are dropped, a log message is generated and the counter increments; the port stays up','Violating frames are dropped silently and the port stays up','The new device is allowed and the oldest MAC is removed'],an=[O[0],O[1],O[2]][i%3];mk('4.7.e','Port Fa0/'+ri(1,24)+' has port security with maximum '+mx+' and violation '+md+'. '+mx+' devices have already been learned and another device connects ('+i+'). What happens?',an,O.filter(x=>x!=an),'Shutdown err-disables, restrict logs, protect drops silently.')};
G.g19=()=>{const p1=ri(90,150),p2=ri(90,150);if(p1==p2)return;const pre1=r()<.5,w=(p1>p2&&pre1)?'R1':'R2';mk('3.4','R1 (HSRP priority '+p1+') and R2 (priority '+p2+') share one HSRP group. R1 failed and has just returned to service. R1 is '+(pre1?'':'not ')+'configured with standby preempt. Which router is active?',w,['R1','R2','Both routers','Neither router until the timers expire'].filter(x=>x!=w),'A returning router takes over only if it has a higher priority and preempt enabled.')};
G.g20=()=>{const v=sh([-40,-45,-52,-58,-63,-67,-72,-78,-85,-90]).slice(0,4),w=Math.max(...v);mk('1.5.b','A survey reports RSSI values of '+v.join(' dBm, ')+' dBm at four locations. Which value indicates the strongest signal?',w+' dBm',v.filter(x=>x!=w).map(x=>x+' dBm'),'Values closer to zero are stronger.')};
const IS=[['up','up','The interface is operational'],['administratively down','down','The interface was shut down with the shutdown command'],['down','down','A physical layer problem such as a disconnected or faulty cable'],['up','down','A Layer 2 problem such as an encapsulation or keepalive mismatch']];
G.g21=i=>{const c=IS[i%4],n=ri(0,24);mk('2.4','Refer to the output. What does it indicate about the interface?'+pre('Interface              IP-Address      OK? Method Status                Protocol\nGigabitEthernet0/'+n+'   10.1.'+n+'.1      YES manual '+c[0].padEnd(22)+c[1]),c[2],IS.filter(x=>x!=c).map(x=>x[2]),'Status shows Layer 1 and protocol shows Layer 2.')};
const rep=(f,n)=>{for(let i=0;i<n;i++)f(i)};
rep(()=>G.g1(),22);rep(()=>G.g2(),30);rep(()=>G.g3(),20);rep(()=>G.g4(),36);rep(()=>G.g5(),24);
rep(i=>G.g6(i%3),36);rep(()=>G.g7(0),20);rep(()=>G.g7(1),10);rep(()=>G.g8(),16);rep(()=>G.g9(),10);
rep(()=>G.g10(),30);rep(()=>G.g10b(),20);rep(()=>G.g11(),20);rep(()=>G.g12(),12);rep(()=>G.g13(),8);
for(let k=0;k<3;k++)SM.forEach((_,i)=>G.g14(k,i));rep(()=>G.g15(),16);EC.forEach((_,i)=>G.g16(i));
for(let k=0;k<3;k++)rep(()=>G.g17(k),4);rep(i=>G.g18(i),12);rep(()=>G.g19(),14);rep(()=>G.g20(),8);rep(i=>G.g21(i),12);
const tops=[()=>G.g2(),()=>G.g4(),()=>G.g10(),()=>G.g1(),()=>G.g11()];let guard=0;while(out.length<600&&guard++<3000)pk(tops)();
const cnt=()=>{const c={};out.forEach(q=>c[q.t]=(c[q.t]||0)+1);return c};
while(out.length>600){const c=cnt(),mx=Object.keys(c).sort((x,y)=>c[y]-c[x])[0],idx=out.map((q,i)=>q.t==mx?i:-1).filter(i=>i>=0),k=idx[Math.floor(r()*idx.length)];out.splice(k,1)}
window.QB2=out;})();

const QBANK=window.QB.concat(window.QB2.map(q=>Object.assign({},q,{sc:1}))).map((q,i)=>({obj:q.t.split('.').slice(0,2).join('.'),q:q.q,c:q.o,a:q.a,e:'['+q.t+'] '+q.e,src:q.sc?'core':((q.tf||/^Which (statement|term)/.test(q.q))?'flashcard':'core'),id:'q'+i}));
const par=t=>t.split('.').slice(0,2).join('.');
const PAIRLIST=PAIRS.split('\n').map(l=>{const[t,r]=l.split('|'),[k,d]=r.split('=>');return{t,k,d}});
const FLASHCARDS=PAIRLIST.map(p=>({t:p.k,obj:par(p.t),d:p.d}));
const AR=[['AAA','Authentication, Authorization, Accounting','Framework that verifies who a user is, what they may do, and logs what they did on a device.','4.1'],['ACL','Access Control List','Ordered permit/deny rules applied to an interface to filter traffic; ends with an implicit deny.','4.6'],['AD','Administrative Distance','Trust rating of a route source; the lower value wins when several protocols offer the same prefix.','3.1'],['AH','Authentication Header','IPsec protocol 51 that gives integrity and authentication but no encryption.','4.5'],['AP','Access Point','Device that connects wireless clients to the wired network.','2.2'],['ARP','Address Resolution Protocol','Resolves an IPv4 address to a MAC address on the local segment; the target of ARP spoofing.','4.7'],['BDR','Backup Designated Router','OSPF standby for the DR on broadcast networks.','3.3'],['BPDU','Bridge Protocol Data Unit','Spanning tree control message used to elect the root and block loops.','2.5'],['CAPWAP','Control and Provisioning of Wireless Access Points','Tunnel protocol between lightweight APs and a WLC (UDP 5246/5247).','2.2'],['CDP','Cisco Discovery Protocol','Cisco-proprietary Layer 2 protocol that reveals directly connected Cisco neighbors.','2.3'],['CIDR','Classless Inter-Domain Routing','Prefix-length notation such as /24 that replaced classful addressing.','1.3'],['CNAME','Canonical Name record','DNS alias that points one hostname to another.','4.4'],['DAI','Dynamic ARP Inspection','Switch feature that drops ARP packets that contradict the DHCP snooping table.','4.7'],['DHCP','Dynamic Host Configuration Protocol','Automatically leases IP address, mask, gateway and DNS settings to clients.','1.7'],['DNS','Domain Name System','Translates hostnames into IP addresses and back.','4.4'],['DR','Designated Router','OSPF router that collects and floods LSAs for a broadcast segment.','3.3'],['ESP','Encapsulating Security Payload','IPsec protocol 50 that provides encryption plus integrity.','4.5'],['EUI-64','Extended Unique Identifier 64-bit','Method of building an IPv6 interface ID from a MAC address.','1.4'],['FHRP','First Hop Redundancy Protocol','Family of protocols giving hosts a resilient virtual default gateway.','3.4'],['HSRP','Hot Standby Router Protocol','Cisco FHRP with an Active and a Standby router.','3.4'],['IaC','Infrastructure as Code','Managing network configuration as versioned, declarative files.','5.3'],['ICMP','Internet Control Message Protocol','Carries ping echo and error messages used for troubleshooting.','2.4'],['IKE','Internet Key Exchange','Negotiates IPsec security associations over UDP 500.','4.5'],['IPsec','Internet Protocol Security','Suite of protocols that encrypts and authenticates IP traffic for VPNs.','4.5'],['LACP','Link Aggregation Control Protocol','IEEE 802.3ad standard for building EtherChannel bundles.','2.1'],['LLDP','Link Layer Discovery Protocol','Vendor-neutral IEEE 802.1AB neighbor discovery protocol.','2.3'],['LLM','Large Language Model','Generative AI model that responds to prompts; never feed it secrets.','5.2'],['MIB','Management Information Base','Hierarchical database of SNMP objects identified by OIDs.','5.4'],['MX','Mail Exchange record','DNS record that names the mail server for a domain.','4.4'],['NAT','Network Address Translation','Translates private addresses to public ones at a network boundary.','4.3'],['NS','Name Server record','DNS record naming a zone\'s authoritative servers.','4.4'],['OID','Object Identifier','Numeric address of an object inside an SNMP MIB.','5.4'],['OSPF','Open Shortest Path First','Link-state IGP using cost and areas; Area 0 is the backbone.','3.3'],['PAT','Port Address Translation','NAT overload that lets many hosts share one address using ports.','4.3'],['PoE','Power over Ethernet','Delivers power over the data cable to phones and APs.','2.2'],['PTR','Pointer record','DNS reverse-lookup record mapping an IP address to a name.','4.4'],['RADIUS','Remote Authentication Dial-In User Service','AAA protocol over UDP that encrypts only the password; also used with 802.1X.','4.1'],['RSSI','Received Signal Strength Indicator','Measure of received wireless power in dBm.','1.5'],['RSTP','Rapid Spanning Tree Protocol','802.1w fast-converging spanning tree with discarding, learning and forwarding states.','2.5'],['SAE','Simultaneous Authentication of Equals','WPA3 handshake that resists offline dictionary attacks.','1.5'],['SCP','Secure Copy Protocol','File copy over SSH used to move configs and images securely.','4.2'],['SFTP','SSH File Transfer Protocol','Secure file transfer subsystem of SSH on TCP 22.','4.2'],['SNMP','Simple Network Management Protocol','Lets a manager poll devices and receive traps for monitoring.','5.4'],['SSID','Service Set Identifier','Name that identifies a wireless network.','1.5'],['STP','Spanning Tree Protocol','Prevents Layer 2 loops by blocking redundant paths.','2.5'],['SVI','Switch Virtual Interface','Logical Layer 3 interface for a VLAN on a multilayer switch.','2.1'],['TACACS+','Terminal Access Controller Access-Control System Plus','Cisco AAA protocol over TCP 49 that encrypts the whole payload.','4.1'],['TTL','Time To Live','Hop-count field decremented per router; traceroute relies on its expiry.','2.4'],['VLAN','Virtual Local Area Network','Logical broadcast domain that segments a switch.','2.2'],['VRRP','Virtual Router Redundancy Protocol','Open-standard FHRP with a Master and Backups.','3.4'],['WLC','Wireless LAN Controller','Central controller that manages lightweight APs and WLANs.','2.2'],['YAML','YAML Ain\'t Markup Language','Human-readable format used for Ansible playbooks.','5.5']];
const ACRONYMS=AR.map(a=>[a[0],a[1],a[2]]);
const OVERRIDES_BY_ACR={};AR.forEach(a=>OVERRIDES_BY_ACR[a[0]]=a[3]);const OVERRIDES_BY_FULL={};
function classifyAcronym(acr,full){return OVERRIDES_BY_ACR[acr]||null}
const O=(obj,title,items)=>({obj,title,type:'order',items});
const PBQS=[
O('1.4','Order the steps to build a modified EUI-64 interface ID',['Split the 48-bit MAC address into two halves','Insert FFFE between the halves','Flip the seventh bit of the first byte','Append the result to the /64 prefix']),
O('1.7','Order the DHCP exchange',['Discover','Offer','Request','Acknowledge']),
O('2.1','Order the commands to configure a trunk port',['interface Gi0/1','switchport trunk encapsulation dot1q','switchport mode trunk','switchport trunk native vlan 99','switchport trunk allowed vlan 10,20,99']),
O('2.1','Order the commands to build an LACP EtherChannel trunk',['interface range Gi0/1 - 2','channel-group 1 mode active','interface port-channel 1','switchport mode trunk']),
O('2.5','Order the spanning tree convergence process',['Switches exchange BPDUs','Lowest bridge ID is elected root bridge','Non-root switches select a root port','Designated ports are chosen on each segment','Remaining ports go to discarding']),
O('3.3','Order the steps to configure single-area OSPFv2',['router ospf 1','router-id 1.1.1.1','network 10.0.0.0 0.0.0.255 area 0','passive-interface default','no passive-interface Gi0/0']),
O('4.3','Order the steps to configure PAT with an interface overload',['access-list 1 permit 192.168.1.0 0.0.0.255','interface Gi0/0 then ip nat inside','interface Gi0/1 then ip nat outside','ip nat inside source list 1 interface Gi0/1 overload']),
O('4.6','Order the commands to build and apply a named extended ACL',['ip access-list extended WEB-ONLY','permit tcp 10.1.1.0 0.0.0.255 any eq 80','permit tcp 10.1.1.0 0.0.0.255 any eq 443','interface Gi0/0','ip access-group WEB-ONLY in']),
O('4.7','Order the commands to configure port security',['switchport mode access','switchport port-security','switchport port-security maximum 2','switchport port-security mac-address sticky','switchport port-security violation restrict']),
O('5.2','Order the parts of a strong prompt build',['Assign a persona','Classify and sanitize the data','State the task instructions','Specify the output format']),
{obj:'3.1',title:'Match the protocol to its default administrative distance',type:'match',pairs:[['Connected','0'],['Static','1'],['EIGRP','90'],['OSPF','110'],['RIP','120']],options:['0','1','90','110','120']},
{obj:'5.6',title:'Match the syslog severity name to its level',type:'match',pairs:['Emergency','Alert','Critical','Error','Warning','Notice','Informational','Debug'].map((n,i)=>[n,String(i)]),options:[0,1,2,3,4,5,6,7].map(String)},
{obj:'4.2',title:'Match the service to its default port',type:'match',pairs:[['TACACS+','TCP 49'],['SSH, SCP and SFTP','TCP 22'],['TFTP','UDP 69'],['SNMP polling','UDP 161'],['Syslog','UDP 514']],options:['TCP 49','TCP 22','UDP 69','UDP 161','UDP 514']}];
(function(){const by={};PAIRLIST.forEach(p=>{(by[p.t]=by[p.t]||[]).push(p)});Object.keys(by).forEach(t=>{const g=[];by[t].forEach(p=>{if(g.length<5&&!g.some(x=>x.d==p.d||x.k==p.k))g.push(p)});if(g.length>=3)PBQS.push({obj:par(t),title:'Match the term to its meaning — '+t+(SUBS[par(t)]&&t.split('.').length>2?' '+(SUBS[par(t)].find(x=>x[0]==t.split('.')[2])||'').slice(2):''),type:'match',pairs:g.map(p=>[p.k,p.d]),options:g.map(p=>p.d)})})})();
PBQS.push(...genAcronymPBQs(5));
const MM=(obj,title,pairs)=>PBQS.push({obj,title,type:'match',pairs,options:pairs.map(p=>p[1])});
const OO=(obj,title,items)=>PBQS.push({obj,title,type:'order',items});
MM('1.1','Match each interface symptom to its most likely cause',[['Late collisions','Duplex mismatch'],['Rising CRC errors','Faulty cable or electromagnetic interference'],['Giant frames','Frames larger than the allowed MTU'],['Interface is err-disabled','A protection feature triggered a shutdown'],['Fiber link down after patching','Transmit and receive strands are swapped']]);
MM('1.1','Match each connection to the correct cable or media',[['Switch to switch without Auto-MDIX','Crossover cable'],['Host to switch','Straight-through cable'],['PC to console port','Rollover cable'],['Building to building, 10 km','Single-mode fiber'],['Short link inside one rack','Multimode fiber']]);
MM('1.3','Match each IPv4 address to its type',[['169.254.10.4','APIPA'],['172.31.5.9','Private (RFC 1918)'],['127.0.0.1','Loopback'],['224.0.0.5','Multicast'],['8.8.8.8','Public']]);
MM('1.3','Match each prefix length to its usable host count',[['/24','254'],['/26','62'],['/27','30'],['/28','14'],['/30','2']]);
MM('1.4','Match each IPv6 address to its type',[['FE80::1','Link-local'],['2001:db8::1','Global unicast'],['FC00::1','Unique local'],['FF02::1','All-nodes multicast'],['::1','Loopback']]);
MM('1.5','Match each wireless term to its meaning',[['RSSI','Received signal strength in dBm'],['SNR','Signal level minus noise floor'],['Co-channel interference','Neighboring APs sharing one channel'],['DFS','Radar avoidance on 5 GHz channels'],['Multipath','Reflected copies of a signal arriving late']]);
MM('1.5','Match each Wi-Fi security option to its characteristic',[['WEP','Deprecated RC4 encryption'],['WPA2','AES-CCMP encryption'],['WPA3','SAE handshake'],['802.1X','Per-user authentication through RADIUS'],['Open','No authentication or encryption']]);
MM('1.6','Match each client command to its purpose and platform',[['ipconfig /all','Windows interface details'],['ip addr','Linux interface details'],['ifconfig','macOS interface details'],['tracert','Windows hop-by-hop path'],['traceroute','Linux and macOS hop-by-hop path']]);
MM('1.7','Match each DHCP message to its purpose',[['Discover','Client broadcast to find servers'],['Offer','Server proposes an address'],['Request','Client asks for the offered address'],['Acknowledge','Server confirms the lease']]);
MM('2.1','Match each EtherChannel mode pair to the result',[['active + passive','LACP bundle forms'],['passive + passive','No bundle forms'],['desirable + auto','PAgP bundle forms'],['on + on','Static bundle forms'],['on + active','No bundle forms: mismatch']]);
MM('2.2','Match each connected device to its switch port configuration',[['Desktop PC','Access port in one VLAN'],['IP phone with PC behind it','Access port plus voice VLAN'],['Lightweight AP in local mode','Access port with CAPWAP tunnel'],['FlexConnect AP','Trunk with local VLAN switching'],['Hypervisor with many VMs','Trunk carrying the VM VLANs']]);
MM('2.3','Match each discovery command to its result',[['show cdp neighbors','Brief list of Cisco neighbors'],['show cdp neighbors detail','Neighbor IP address and IOS version'],['show lldp neighbors','Vendor-neutral neighbor list'],['lldp run','Enables LLDP globally'],['no cdp run','Disables CDP globally']]);
MM('2.4','Match each troubleshooting tool to the question it answers',[['ping','Is the host reachable?'],['traceroute','Where does the path stop?'],['show ip route','Which next hop is used?'],['show mac address-table','Which port learned this MAC?'],['show interfaces','Are there errors or duplex problems?']]);
MM('2.4','Match each interface status pair to its meaning',[['up / up','Operational'],['administratively down / down','Shut down with the shutdown command'],['down / down','Physical layer fault'],['up / down','Layer 2 problem such as an encapsulation mismatch']]);
MM('2.5','Match each Rapid PVST+ port role to its description',[['Root port','Best path toward the root on a non-root switch'],['Designated port','Forwarding port for a segment'],['Alternate port','Backup path to the root through another switch'],['Backup port','Redundant path to the same shared segment'],['Edge port','Port facing an end host']]);
MM('3.1','Match each routing table code to its meaning',[['C','Directly connected network'],['L','Local interface address'],['S','Static route'],['O','OSPF-learned route'],['S*','Static candidate default route']]);
MM('3.1','Match each routing rule to its example',[['Longest prefix match','A /24 route is chosen over a /16 route'],['Lowest administrative distance','Static beats OSPF for the same prefix'],['Lowest metric','Best path within one routing protocol'],['Default route','Used when no specific route matches'],['Equal-cost paths','Traffic is load-balanced']]);
MM('3.2','Match each static route type to its command',[['Default route','ip route 0.0.0.0 0.0.0.0 192.0.2.1'],['Network route','ip route 10.2.0.0 255.255.0.0 192.0.2.1'],['Host route','ip route 10.2.2.2 255.255.255.255 192.0.2.1'],['Floating static','ip route 10.2.0.0 255.255.0.0 192.0.2.5 130'],['IPv6 default route','ipv6 route ::/0 2001:db8::1']]);
MM('3.3','Match each OSPF neighbor problem to its cause',[['Stuck in ExStart','MTU mismatch'],['No neighbors and mismatched hellos','Different hello and dead timers'],['Neighbors on one link in different areas','Area ID mismatch'],['No hello packets sent','Interface configured as passive'],['Adjacency flaps','Duplicate router ID']]);
MM('3.3','Match each OSPF term to its meaning',[['DR','Collects and floods LSAs on a segment'],['BDR','Standby for the DR'],['Priority 0','Never becomes DR or BDR'],['224.0.0.5','All OSPF routers'],['224.0.0.6','DR and BDR routers']]);
MM('3.4','Match each FHRP term to its meaning',[['HSRP Active','Forwards traffic for the virtual IP'],['HSRP Standby','Takes over if the active router fails'],['VRRP Master','Forwards traffic in VRRP'],['Preempt','Lets a higher priority router reclaim its role'],['Virtual IP','Gateway address configured on hosts']]);
MM('4.1','Match each AAA concept to its description',[['Authentication','Verify who the user is'],['Authorization','Decide what the user may do'],['Accounting','Record what the user did'],['TACACS+','TCP 49 with full payload encryption'],['RADIUS','UDP with password-only encryption']]);
MM('4.3','Match each NAT term to its meaning',[['Inside local','Private address of an inside host'],['Inside global','Public address representing the inside host'],['Outside global','Public address of the remote host'],['Static NAT','Permanent one-to-one translation'],['PAT','Many hosts share one address using ports']]);
MM('4.4','Match each DNS record to its use',[['A','Hostname to IPv4 address'],['AAAA','Hostname to IPv6 address'],['CNAME','Alias to another name'],['MX','Mail server for a domain'],['NS','Authoritative name server'],['PTR','IP address to hostname']]);
MM('4.5','Match each IPsec term to its description',[['ESP','Encryption and integrity'],['AH','Integrity without encryption'],['Tunnel mode','Entire original packet gets a new header'],['Transport mode','Only the payload is protected'],['IKE','Negotiates the security associations']]);
MM('4.6','Match each ACL concept to its trait',[['Standard ACL','Matches source only, placed near the destination'],['Extended ACL','Matches protocol and ports, placed near the source'],['Named ACL','Entries editable by sequence number'],['Implicit deny','Drops anything not matched'],['Wildcard 0.0.0.255','Matches an entire /24']]);
MM('4.7','Match each Layer 2 security feature to the threat it stops',[['DHCP snooping','Rogue DHCP server'],['Dynamic ARP inspection','ARP spoofing'],['Storm control','Broadcast flood'],['RA Guard','Rogue IPv6 Router Advertisement'],['Port security','Unauthorized MAC address']]);
MM('4.7','Match each port security setting to its behavior',[['Violation shutdown','Port becomes err-disabled'],['Violation restrict','Drops and logs while port stays up'],['Violation protect','Drops silently while port stays up'],['Sticky MAC','Learned MAC is saved to the running configuration']]);
MM('5.2','Match each prompt component to an example',[['Persona','Act as a senior network engineer'],['Instructions','Analyze this OSPF output and find the fault'],['Data classification','Remove passwords before pasting the config'],['Output format','Return the findings as a table']]);
MM('5.3','Match each management approach to an example',[['Device-based','SSH to each switch separately'],['Controller-based','Policy pushed from Catalyst Center'],['Cloud-based','Meraki dashboard'],['Automation-based','Python script calling device APIs'],['Infrastructure as code','Desired state stored in Git']]);
MM('5.4','Match each SNMP term to its meaning',[['Trap','Agent-initiated alert'],['Get','Manager polls a value'],['MIB','Database of managed objects'],['Community string','Cleartext secret in SNMPv2c'],['SNMPv3','Authentication and encryption']]);
MM('5.5','Match each Ansible term to its meaning',[['Playbook','YAML file of tasks'],['Inventory','List of managed hosts'],['Module','Unit of work such as ios_config'],['Idempotent','Repeated runs give the same result'],['Agentless','Connects over SSH with no client software']]);
OO('1.1','Order the steps to troubleshoot a suspected cable fault',['Check link lights and interface status','Review counters with show interfaces','Verify speed and duplex on both ends','Replace or test the cable','Retest with a known-good port']);
OO('1.4','Order the steps to configure an IPv6 router interface',['ipv6 unicast-routing','interface GigabitEthernet0/0','ipv6 address 2001:db8:1::1/64','no shutdown']);
OO('1.6','Order the steps to troubleshoot a client that cannot reach a website',['Verify the link and wireless association','Check the IP configuration','Ping the default gateway','Ping a remote IP address','Test DNS name resolution']);
OO('1.7','Order the commands to configure a router DHCP pool',['ip dhcp excluded-address 192.168.20.1 192.168.20.10','ip dhcp pool LAN','network 192.168.20.0 255.255.255.0','default-router 192.168.20.1','dns-server 8.8.8.8']);
OO('1.7','Order the commands to relay DHCP to a remote server',['interface GigabitEthernet0/1','ip address 192.168.10.1 255.255.255.0','ip helper-address 10.0.0.10','no shutdown']);
OO('2.1','Order the commands to build an SVI on a switch',['vlan 10','interface vlan 10','ip address 192.168.10.1 255.255.255.0','no shutdown','ip routing']);
OO('2.1','Order the commands to configure a Layer 3 EtherChannel',['interface range GigabitEthernet0/1 - 2','no switchport','channel-group 2 mode active','interface port-channel 2','ip address 10.1.1.1 255.255.255.252']);
OO('2.2','Order the commands to configure an IP phone and PC port',['interface FastEthernet0/5','switchport mode access','switchport access vlan 10','switchport voice vlan 150','spanning-tree portfast']);
OO('2.3','Order the steps to validate documentation with LLDP',['lldp run','show lldp neighbors','show lldp neighbors detail','Compare the output with the diagram']);
OO('2.4','Order the layered connectivity tests',['Ping the loopback address','Ping the local IP address','Ping the default gateway','Ping a remote host','Run traceroute to find where the path stops']);
OO('2.5','Order the commands to harden an access port for Rapid PVST+',['spanning-tree mode rapid-pvst','spanning-tree vlan 10 root primary','interface FastEthernet0/1','spanning-tree portfast','spanning-tree bpduguard enable']);
OO('3.1','Order how a router chooses a route',['Match the destination to all candidate routes','Select the longest prefix match','Prefer the lowest administrative distance','Prefer the lowest metric','Forward to the next hop']);
OO('3.2','Order the steps to deploy and test a floating static route',['Confirm the OSPF route is in the table','ip route 10.0.0.0 255.0.0.0 192.168.2.2 130','Shut down the primary link','Verify the floating route is installed','Restore the link and confirm OSPF returns']);
OO('3.3','Order the OSPF neighbor states',['Down','Init','2-Way','ExStart','Exchange','Loading','Full']);
OO('3.3','Order the OSPF DR election steps',['Routers exchange hello packets','Priorities are compared','A tie is broken by the highest router ID','The DR is elected','The BDR is elected']);
OO('3.4','Order the commands to configure HSRP',['interface GigabitEthernet0/0','ip address 10.1.1.2 255.255.255.0','standby 1 ip 10.1.1.254','standby 1 priority 110','standby 1 preempt']);
OO('4.1','Order the commands to configure TACACS+ login',['aaa new-model','username admin secret C1sco#123','tacacs server TAC1','address ipv4 10.1.1.10','aaa authentication login default group tacacs+ local']);
OO('4.2','Order the steps to enable SCP on a router',['hostname R1','ip domain-name lab.local','crypto key generate rsa modulus 2048','ip ssh version 2','ip scp server enable']);
OO('4.3','Order the commands to configure static NAT',['interface GigabitEthernet0/0','ip nat inside','interface GigabitEthernet0/1','ip nat outside','ip nat inside source static 192.168.1.10 203.0.113.10']);
OO('4.4','Order the steps to troubleshoot a DNS failure',['Confirm the client DNS server setting','Run nslookup for the name','Check the record type returned','Verify the zone or resolver','Flush the client cache and retest']);
OO('4.5','Order the steps to configure a site-to-site IPsec VPN',['Define the IKE policy','Define the transform set','Define the crypto ACL','Create the crypto map','Apply the crypto map to the interface']);
OO('4.6','Order the commands to build and apply a standard ACL',['access-list 10 permit 192.168.1.0 0.0.0.255','interface GigabitEthernet0/1','ip access-group 10 out']);
OO('4.7','Order the commands to enable DHCP snooping',['ip dhcp snooping','ip dhcp snooping vlan 10','interface GigabitEthernet0/1','ip dhcp snooping trust','ip dhcp snooping limit rate 15']);
OO('4.7','Order the commands to add dynamic ARP inspection',['ip dhcp snooping vlan 10','ip arp inspection vlan 10','interface GigabitEthernet0/1','ip arp inspection trust']);
OO('4.7','Order the commands to configure storm control',['interface FastEthernet0/2','storm-control broadcast level 20','storm-control action shutdown']);
OO('5.1','Order the safe use of an agentic AI change',['Define the goal','Grant least-privilege access','Review the proposed plan','Approve the change','Execute and monitor','Review the audit log']);
OO('5.5','Order the Ansible workflow',['Write the inventory','Write the playbook','Run ansible-playbook','Review the results','Re-run to confirm idempotence']);
OO('5.6','Order the commands to send logs to a syslog server',['logging host 10.1.1.200','logging trap warnings','service timestamps log datetime msec','logging buffered 16384','show logging']);

const TIPS=[{icon:'book',title:'Study by domain weight',body:'Network Infrastructure (25%) and Switching (25%) are half the exam; IP Routing and Network Services and Security are 20% each; AI and Network Operations is 10%.',list:['Allocate study time roughly in proportion to domain weight.','Do not skip Domain 5: it is small but new, and it tests judging AI output.']},
{icon:'quiz',title:'Use active recall',body:'Answering questions beats re-reading. Quiz yourself daily and say the command before you flip a flashcard.',list:['Run 10 to 25 questions a day instead of one long weekly cram.','When you miss a question, retype the command from memory.']},
{icon:'cards',title:'Subnet every day',body:'Subnetting underlies addressing, ACLs, OSPF and NAT questions, and speed matters.',list:['Practise in the Labs subnet calculator, then check by hand.','Learn block sizes and wildcard masks until they are automatic.']},
{icon:'pbq',title:'Lab every objective',body:'The CCNA tests configuration and troubleshooting, so practise on Packet Tracer or CML as well as in the CLI lab here.',list:['Build VLANs, trunks, EtherChannel, OSPF, NAT and ACLs end to end.','Break things on purpose and fix them with show commands.']},
{icon:'shield',title:'Read output carefully',body:'Many questions give show output, logs or an AI assistant recommendation to evaluate.',list:['Identify the interface, state, role and counters before answering.','Never trust an AI recommendation without checking it against the output.']}];
const STUDY_METHODS=[{icon:'quiz',name:'Retrieval Practice (Active Recall)',summary:'Producing an answer from memory builds stronger recall than re-reading notes.',breakdown:['Recognising a command is easier than producing it.','Each successful retrieval strengthens memory (the testing effect).','Short, frequent sessions work best.'],application:['Take a 10 to 25 question quiz every day.','Try to state the command aloud before flipping a flashcard.','Click one objective in the sidebar to quiz a single topic.']},
{icon:'refresh',name:'Spaced Repetition',summary:'Reviewing at growing intervals beats massing study into one session.',breakdown:['Memory decays predictably without review.','Spaced review gives durable retention.','Weak objectives should return sooner.'],application:['Watch the sidebar percentages and revisit low objectives.','Spread acronym flashcards over several days.','Re-quiz an objective a few days after scoring well.']},
{icon:'pbq',name:'Hands-On Lab Repetition',summary:'Typing configurations builds the muscle memory the exam rewards.',breakdown:['Producing syntax is harder than recognising it.','Fixing your own errors builds troubleshooting instinct.','Labs make show output meaningful.'],application:['Complete the CLI lab tasks in Labs without hints.','Rebuild the PBQ ordering lists from memory.','Reproduce each lab in Packet Tracer or CML.']},
{icon:'cards',name:'Interleaving',summary:'Mixing topics in one session improves your ability to choose the right approach.',breakdown:['Blocked practice hides which concept applies.','Mixed practice forces discrimination, as on the real exam.'],application:['Use the all-domains mixed quiz once you finish a domain.','Alternate subnetting, ACL and OSPF questions in one sitting.']},
{icon:'warn',name:'Error Log Review',summary:'Reviewing mistakes turns weak spots into strengths.',breakdown:['Most gains come from fixing repeated errors.','Writing why you were wrong prevents repeats.'],application:['Read every explanation after a miss and restate it.','Return to objectives with the lowest sidebar percentage.','Use Dashboard stats to find weak domains.']}];

function shuffle(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

const STORE_KEY = 'ccna_progress_v1';
function loadProgress(){ try{ const p = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; return {seen:p.seen||{}, correct:p.correct||{}, flashSeen:p.flashSeen||{}, pbq:p.pbq||{}, dailyLog:p.dailyLog||{}}; }catch(e){ return {seen:{}, correct:{}, flashSeen:{}, pbq:{}, dailyLog:{}}; } }
function saveProgress(p){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(p)); }catch(e){} }
function todayKey(){ return new Date().toISOString().slice(0,10); }
function logDailyActivity(){ const k = todayKey(); progress.dailyLog[k] = (progress.dailyLog[k]||0) + 1; }
let progress = loadProgress();

const SETTINGS_KEY = 'ccna_settings_v1';
const DEFAULT_FONT_SIZE = 15;
const RADIUS_PRESETS = {theme:null, sharp:'0px', soft:'8px', rounded:'14px', pill:'22px'};
function loadSettings(){
  try{
    const s = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
    return {
      theme: s.theme || 'light',
      layout: s.layout || 'default',
      fontSize: s.fontSize || DEFAULT_FONT_SIZE,
      density: s.density || 'comfortable',   // compact | comfortable | spacious
      motion: s.motion || 'normal',           // normal | reduced
      radius: s.radius || 'theme',            // theme | sharp | soft | rounded | pill
      accent: s.accent || '',                 // '' = use theme's own accent color
      quizDefaultSize: s.quizDefaultSize || 10,
      dailyGoal: s.dailyGoal || 20,
      sidebarExpanded: !!s.sidebarExpanded,
    };
  }catch(e){
    return {theme:'light', layout:'default', fontSize:DEFAULT_FONT_SIZE, density:'comfortable', motion:'normal', radius:'theme', accent:'', quizDefaultSize:10, dailyGoal:20, sidebarExpanded:false};
  }
}
function saveSettings(s){ try{ localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); }catch(e){} }
let settings = loadSettings();
function applySettings(){
  document.documentElement.setAttribute('data-theme', settings.theme);
  if(settings.layout && settings.layout!=='default') document.documentElement.setAttribute('data-layout', settings.layout);
  else document.documentElement.removeAttribute('data-layout');
  // The whole stylesheet is authored in rem units, so setting the ROOT element's
  // font-size (not the body's) rescales every piece of text on the site uniformly.
  const fs = Math.max(8, Math.min(24, settings.fontSize || DEFAULT_FONT_SIZE));
  document.documentElement.style.fontSize = fs + 'px';
  document.documentElement.setAttribute('data-density', settings.density || 'comfortable');
  document.documentElement.setAttribute('data-motion', settings.motion === 'reduced' ? 'reduced' : 'normal');
  const radiusVal = RADIUS_PRESETS[settings.radius];
  if(radiusVal) document.documentElement.style.setProperty('--radius', radiusVal);
  else document.documentElement.style.removeProperty('--radius');
  if(settings.accent){
    document.documentElement.style.setProperty('--accent', settings.accent);
    document.documentElement.style.setProperty('--accent-text', pickContrastText(settings.accent));
  } else {
    document.documentElement.style.removeProperty('--accent');
    document.documentElement.style.removeProperty('--accent-text');
  }
}
function pickContrastText(hex){
  const h = hex.replace('#','');
  if(h.length!==6) return '#ffffff';
  const r=parseInt(h.slice(0,2),16), g=parseInt(h.slice(2,4),16), b=parseInt(h.slice(4,6),16);
  const luminance = (0.299*r + 0.587*g + 0.114*b) / 255;
  return luminance > 0.6 ? '#1c1c1c' : '#ffffff';
}
applySettings();

/* ============ THEME COLOR PREVIEW (read live from the stylesheet, single source of truth) ============ */
function getThemeColorMap(){
  const root = {bg:'#f7f6f3', bgElev:'#ffffff', text:'#1c1c1c', accent:'#2f5d50', border:'#dedbd3'};
  const map = {};
  for(const sheet of document.styleSheets){
    let rules;
    try{ rules = sheet.cssRules || sheet.rules; }catch(e){ continue; }
    if(!rules) continue;
    for(const rule of rules){
      if(!rule.selectorText) continue;
      const m = rule.selectorText.match(/data-theme="([a-zA-Z0-9-]+)"/);
      if(!m) continue;
      const name = m[1];
      const st = rule.style;
      const get = (prop, fallback)=>{ const v = st.getPropertyValue(prop); return v && v.trim() ? v.trim() : fallback; };
      map[name] = {
        bg: get('--bg', root.bg),
        bgElev: get('--bg-elev', root.bgElev),
        text: get('--text', root.text),
        accent: get('--accent', root.accent),
        border: get('--border', root.border)
      };
    }
  }
  if(!map.light) map.light = root;
  return map;
}
const THEME_COLOR_MAP = getThemeColorMap();

/* ============ NAV DOMAIN SIDEBAR ============ */
function renderNavDomains(){
  const wrap = document.getElementById('navDomains');
  wrap.innerHTML = DOMAINS.map(d=>{
    const objs = d.objectives.map(o=>{
      const stats = objStats(o.id);
      return '<li class="obj-item"><a href="#/objective/'+o.id+'" class="obj-link" data-objid="'+o.id+'"><span>'+o.id+' '+o.title+'</span><span class="obj-badge">'+stats.pct+'%</span></a></li>';
    }).join('');
    return '<div class="domain-block" data-domain="'+d.id+'">'+
      '<div class="domain-header" data-toggle="'+d.id+'">'+icon(d.icon)+'<span style="flex:1">'+d.id+' '+d.title+'</span><span class="domain-weight">'+d.weight+'%</span>'+
      '<span class="domain-chevron">'+icon('external')+'</span></div>'+
      '<ul class="obj-list collapsed" id="objlist-'+d.id+'">'+objs+'</ul></div>';
  }).join('');
  wrap.querySelectorAll('[data-toggle]').forEach(h=>h.addEventListener('click',()=>{
    const id=h.getAttribute('data-toggle');
    document.getElementById('objlist-'+id).classList.toggle('collapsed');
    h.querySelector('.domain-chevron').classList.toggle('open');
  }));
}
function objStats(objId){
  const qs = QBANK.filter(q=>q.obj===objId);
  let seen=0, correct=0;
  qs.forEach(q=>{ if(progress.seen[q.id]){seen++; if(progress.correct[q.id]) correct++; } });
  const pct = qs.length ? Math.round((correct/qs.length)*100) : 0;
  return {total:qs.length, seen, correct, pct};
}
function domainStats(domId){
  const d = DOMAINS.find(x=>x.id===domId);
  let total=0, correct=0;
  d.objectives.forEach(o=>{ const s=objStats(o.id); total+=s.total; correct+=s.correct; });
  return {total, correct, pct: total? Math.round((correct/total)*100):0};
}
/* ============ OBJECTIVE POINTS / READINESS SCORE ============
   Each domain's exam weight (summing to 100 across all domains) is split evenly across
   its own objectives, giving every objective a fixed "points possible" value. Points
   earned scale with that objective's accuracy so far. Summed across every objective,
   this produces a single Readiness Score out of 100 that mirrors the real exam's weighting. */
function objPoints(objId){
  const o = OBJ_INDEX[objId];
  const domain = DOMAINS.find(d=>d.id===o.domain);
  const possible = domain.weight / domain.objectives.length;
  const s = objStats(objId);
  const earned = s.total ? possible * (s.correct / s.total) : 0;
  return {possible, earned};
}
function readinessScore(){
  let earned = 0, possible = 0;
  DOMAINS.forEach(d=>d.objectives.forEach(o=>{
    const p = objPoints(o.id);
    earned += p.earned; possible += p.possible;
  }));
  return {earned: Math.round(earned*10)/10, possible: Math.round(possible*10)/10};
}
function sparklineHTML(days){
  const today = new Date();
  const cols = [];
  let max = 1;
  const vals = [];
  for(let i=days-1; i>=0; i--){
    const d = new Date(today); d.setDate(d.getDate()-i);
    const key = d.toISOString().slice(0,10);
    const v = progress.dailyLog[key] || 0;
    vals.push({key, v, d});
    if(v>max) max=v;
  }
  vals.forEach(({v,d})=>{
    const h = Math.max(2, Math.round((v/max)*100));
    const lbl = d.toLocaleDateString(undefined,{weekday:'narrow'});
    cols.push('<div class="sparkline-col" title="'+v+' answered"><i style="height:'+h+'%"></i><span>'+lbl+'</span></div>');
  });
  return '<div class="sparkline">'+cols.join('')+'</div>';
}

/* ============ ROUTER ============ */
let quizState = null;
function route(){
  const hash = location.hash.replace('#/','') || 'dashboard';
  const parts = hash.split('/');
  document.querySelectorAll('.nav-link[data-route]').forEach(a=>a.classList.toggle('active', a.getAttribute('data-route')===parts[0]));
  document.querySelectorAll('.obj-link').forEach(a=>a.classList.remove('active'));
  renderNavDomains();
  document.querySelectorAll('.obj-link').forEach(a=>{ if(parts[0]==='objective' && a.getAttribute('data-objid')===parts[1]) a.classList.add('active'); });
  const main = document.getElementById('main');
  if(parts[0]==='dashboard') renderDashboard(main);
  else if(parts[0]==='quiz') renderQuizStart(main);
  else if(parts[0]==='objective') renderQuizStart(main, parts[1]);
  else if(parts[0]==='flashcards') renderFlashcards(main);
  else if(parts[0]==='pbq') renderPBQList(main);
  else if(parts[0]==='labs') renderLabs(main);
  else if(parts[0]==='ptlabs') renderPTLabs(main);
  else if(parts[0]==='acronyms') renderAcronyms(main);
  else if(parts[0]==='studytips') renderStudyTips(main);
  else if(parts[0]==='settings') renderSettings(main);
  else renderDashboard(main);
  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo(0,0);
}
window.addEventListener('hashchange', route);
document.getElementById('menuToggle').addEventListener('click', ()=>document.getElementById('sidebar').classList.toggle('open'));

/* ============ DOWNLOADABLE FILES (generated client-side from the site's own data, no server needed) ============ */
function downloadTextFile(filename, content){
  const blob = new Blob([content], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
function buildExamObjectivesText(){
  const lines = [];
  lines.push('COMPTIA LINUX+ (200-301) — EXAM OBJECTIVES');
  lines.push('Compiled reference, generated from CCNA Study Desk');
  lines.push('='.repeat(60));
  lines.push('');
  lines.push('Required exam: 200-301   Max questions: 90   Length: 90 minutes');
  lines.push('Question types: Multiple-choice and performance-based');
  lines.push('');
  DOMAINS.forEach(d=>{
    lines.push('-'.repeat(60));
    lines.push(d.id+'  '+d.title.toUpperCase()+'   ('+d.weight+'% of exam)');
    lines.push('-'.repeat(60));
    d.objectives.forEach(o=>{
      lines.push('');
      lines.push('  '+o.id+'  '+o.title);
      const cats = TAXONOMY[o.id];
      if(cats){
        cats.forEach(cat=>{
          lines.push('     • '+cat.label+':');
          lines.push('         '+cat.items.join(', '));
        });
      }
    });
    lines.push('');
  });
  lines.push('='.repeat(60));
  lines.push('Generated by CCNA Study Desk. For the official, authoritative');
  lines.push('exam objectives document, see comptia.org/certifications/linux.');
  return lines.join('\n');
}
function buildManualText(){
  const lines = [];
  lines.push('LINUX+ STUDY DESK — USER MANUAL');
  lines.push('200-301 practice companion');
  lines.push('='.repeat(60));
  lines.push('');
  lines.push('OVERVIEW');
  lines.push('-'.repeat(60));
  lines.push('This site is a self-contained study tool for the Cisco CCNA');
  lines.push('(200-301) exam. It runs entirely in your browser — there is no server');
  lines.push('and no account. All of your progress, settings, and preferences are');
  lines.push('saved locally on this device using browser storage (localStorage) and');
  lines.push('are never transmitted anywhere. Clearing your browser data, or using');
  lines.push('a different browser/device, will reset your saved progress.');
  lines.push('');
  lines.push('NAVIGATION — WHAT EACH SECTION DOES');
  lines.push('-'.repeat(60));
  lines.push('');
  lines.push('Dashboard');
  lines.push('  Your home base. Shows total questions answered, overall accuracy,');
  lines.push('  a donut chart of correct/incorrect/unattempted questions, a chart of');
  lines.push('  the question bank\'s composition, a bar chart comparing your accuracy');
  lines.push('  per domain against that domain\'s real exam weight, PBQ completion');
  lines.push('  stats, and a daily question goal tracker.');
  lines.push('');
  lines.push('Practice Quiz');
  lines.push('  Multiple-choice practice pulled from the full question bank. Choose');
  lines.push('  a batch size (10/25/50/100/all) and answer at your own pace — each');
  lines.push('  question shows the correct answer and an explanation immediately');
  lines.push('  after you answer. You can also launch an objective-specific quiz by');
  lines.push('  clicking any objective (e.g. "4.6") in the left sidebar.');
  lines.push('');
  lines.push('Flashcards');
  lines.push('  Two decks: "Concepts" (key terms and definitions) and "Acronyms"');
  lines.push('  (every official 200-301 acronym with its expansion and a plain-');
  lines.push('  language explanation), plus an "All" combined view. Click a card to');
  lines.push('  flip it, use Shuffle to randomize order, and switch decks with the');
  lines.push('  tabs at the top of the page.');
  lines.push('');
  lines.push('Performance-Based Questions (PBQ)');
  lines.push('  Matching and ordering exercises modeled on the real exam\'s PBQ');
  lines.push('  format. Each one is tagged to the specific objective it covers —');
  lines.push('  use the domain filter buttons at the top of the list to focus on');
  lines.push('  one domain at a time.');
  lines.push('');
  lines.push('Acronyms');
  lines.push('  A searchable glossary of the full official 200-301 acronym list.');
  lines.push('  Search matches the acronym, its expansion, AND its explanation, so');
  lines.push('  you can search by concept (e.g. "phishing") and not just by letters.');
  lines.push('');
  lines.push('Study Tips');
  lines.push('  Quick tips plus a full breakdown of eight evidence-based study');
  lines.push('  methods (retrieval practice, spaced repetition, interleaving, and');
  lines.push('  more), each with a "why it works" explanation and specific steps');
  lines.push('  for applying that method using this site\'s features.');
  lines.push('');
  lines.push('Settings');
  lines.push('  Theme (with a live color preview per option), layout (with a mini');
  lines.push('  structural preview per option), a custom accent color override,');
  lines.push('  density, corner style, reduced motion, font size (8-24px, rescales');
  lines.push('  all text on the site), default quiz length, daily question goal,');
  lines.push('  and a full progress reset.');
  lines.push('');
  lines.push('TIPS FOR GETTING THE MOST OUT OF THIS SITE');
  lines.push('-'.repeat(60));
  lines.push('  1. Set a realistic daily goal in Settings and check the Dashboard');
  lines.push('     goal bar each day rather than cramming in one long session.');
  lines.push('  2. Use objective-filtered quizzes (via the sidebar) to target your');
  lines.push('     weakest domains, identified from the Dashboard\'s bar chart.');
  lines.push('  3. Don\'t skip PBQs — they build the same recognition skills the');
  lines.push('     real exam tests with matching and ordering questions.');
  lines.push('  4. Revisit the Acronyms glossary regularly; 200-301 leans heavily');
  lines.push('     on acronym recognition.');
  lines.push('  5. Read every explanation, even for questions you got right — it');
  lines.push('     reinforces the "why," not just the "what."');
  lines.push('');
  lines.push('='.repeat(60));
  lines.push('Generated by CCNA Study Desk.');
  return lines.join('\n');
}
document.getElementById('downloadObjectivesBtn').addEventListener('click', ()=>{
  downloadTextFile('linux-plus-xk0-005-exam-objectives.txt', buildExamObjectivesText());
});
document.getElementById('downloadManualBtn').addEventListener('click', ()=>{
  downloadTextFile('linux-plus-study-desk-manual.txt', buildManualText());
});

/* ============ DASHBOARD ============ */
/* ============ CHART HELPERS (pure CSS conic-gradient donuts + flex bar charts, no libraries needed) ============ */
function donutChart(segments, centerLabel, centerSub, sizeClass){
  const total = segments.reduce((s,x)=>s+x.value,0) || 1;
  let acc = 0;
  const stops = segments.map(s=>{
    const start = acc/total*360; acc += s.value; const end = acc/total*360;
    return s.color+' '+start.toFixed(1)+'deg '+end.toFixed(1)+'deg';
  }).join(', ');
  return '<div class="donut'+(sizeClass ? ' '+sizeClass : '')+'" style="background:conic-gradient('+stops+');">'+
    '<div class="donut-center"><b>'+centerLabel+'</b><span>'+centerSub+'</span></div>'+
  '</div>';
}
function chartLegend(segments, showPct){
  const total = segments.reduce((s,x)=>s+x.value,0) || 1;
  return '<div class="chart-legend">'+segments.map(s=>
    '<div class="legend-row"><span class="legend-dot" style="background:'+s.color+'"></span>'+s.label+
    '<b>'+(showPct ? Math.round(s.value/total*100)+'%' : s.value)+'</b></div>'
  ).join('')+'</div>';
}
function domainBarsChart(){
  const maxWeight = Math.max(...DOMAINS.map(d=>d.weight));
  const cols = DOMAINS.map(d=>{
    const s = domainStats(d.id);
    return '<div class="bars-col">'+
      '<div class="bars-pair" title="'+d.id+' — '+s.pct+'% your accuracy vs '+d.weight+'% exam weight">'+
        '<i style="height:'+Math.max(2,s.pct)+'%; background:var(--accent);"></i>'+
        '<i style="height:'+Math.max(2, Math.round(d.weight/maxWeight*100))+'%; background:var(--border);"></i>'+
      '</div>'+
      '<div class="bars-col-label">'+d.id.split('.')[0]+'.0</div>'+
    '</div>';
  }).join('');
  return '<div class="bars-chart">'+cols+'</div>'+
    '<div class="chart-legend" style="flex-direction:row; gap:16px; margin-top:12px; flex-wrap:wrap;">'+
      '<div class="legend-row"><span class="legend-dot" style="background:var(--accent)"></span>Your accuracy</div>'+
      '<div class="legend-row"><span class="legend-dot" style="background:var(--border)"></span>Exam weight (relative)</div>'+
    '</div>';
}

/* ============ DASHBOARD ============ */
function renderDashboard(main){
  const totalQ = QBANK.length;
  let seenCount=0, correctCount=0;
  QBANK.forEach(q=>{ if(progress.seen[q.id]) seenCount++; if(progress.correct[q.id]) correctCount++; });
  const overallPct = seenCount ? Math.round((correctCount/seenCount)*100) : 0;
  const incorrectCount = seenCount - correctCount;
  const unattemptedCount = totalQ - seenCount;

  const rScore = readinessScore();
  const rPct = rScore.possible ? Math.round(rScore.earned / rScore.possible * 100) : 0;

  const domainCards = DOMAINS.map(d=>{
    const s = domainStats(d.id);
    const dIncorrect = s.total ? (Object.values(d.objectives).reduce((acc,o)=>{
      const os = objStats(o.id); let c=0; QBANK.filter(q=>q.obj===o.id).forEach(q=>{ if(progress.seen[q.id] && !progress.correct[q.id]) c++; });
      return acc+c;
    },0)) : 0;
    const dUnattempted = s.total - s.correct - dIncorrect;
    const dSegments = [
      {label:'Correct', value:s.correct, color:'#16a34a'},
      {label:'Incorrect', value:dIncorrect, color:'#dc2626'},
      {label:'Unattempted', value:Math.max(0,dUnattempted), color:'var(--border)'},
    ];
    return '<div class="card">'+
      '<div class="card-icon-row">'+icon(d.icon,'icon-lg')+'<strong>'+d.id+' '+d.title+'</strong></div>'+
      '<div class="muted" style="margin-bottom:8px;">Exam weight: '+d.weight+'%</div>'+
      '<div class="donut-wrap" style="gap:14px; margin-bottom:8px;">'+
        donutChart(dSegments, s.pct+'%', 'accuracy', 'donut-sm')+
        '<div style="flex:1; min-width:0;">'+
          '<div class="progress-track"><div class="progress-fill" style="width:'+s.pct+'%"></div></div>'+
          '<div class="muted" style="margin-top:6px; font-size:0.78rem;">'+s.correct+' / '+s.total+' questions correct</div>'+
        '</div>'+
      '</div>'+
      '<a class="btn secondary" style="margin-top:4px; display:inline-block;" href="#/objective/'+d.objectives[0].id+'">Study this domain</a>'+
    '</div>';
  }).join('');

  // Question bank composition by source
  const srcCounts = {core:0, taxonomy:0, acronym:0, flashcard:0};
  QBANK.forEach(q=>{ const s=q.src||'core'; srcCounts[s]=(srcCounts[s]||0)+1; });
  const compSegments = [
    {label:'Hand-authored scenarios', value:srcCounts.core, color:'#3b82f6'},
    {label:'Objective taxonomy', value:srcCounts.taxonomy, color:'#10b981'},
    {label:'Acronym-derived', value:srcCounts.acronym, color:'#f59e0b'},
    {label:'Flashcard-derived', value:srcCounts.flashcard, color:'#a855f7'},
  ];
  const accuracySegments = [
    {label:'Correct', value:correctCount, color:'#16a34a'},
    {label:'Incorrect', value:incorrectCount, color:'#dc2626'},
    {label:'Unattempted', value:unattemptedCount, color:'var(--border)'},
  ];

  // PBQ metrics
  const pbqAttempted = Object.keys(progress.pbq).length;
  const pbqEntries = Object.values(progress.pbq);
  const pbqAvgPct = pbqAttempted ? Math.round(pbqEntries.reduce((s,x)=>s+(x.correct/x.total),0)/pbqAttempted*100) : 0;
  const pbqPerfectCount = pbqEntries.filter(x=>x.correct===x.total).length;
  const pbqPartialCount = pbqEntries.filter(x=>x.correct<x.total).length;
  const pbqUnattempted = PBQS.length - pbqAttempted;
  const pbqSegments = [
    {label:'Perfect', value:pbqPerfectCount, color:'#16a34a'},
    {label:'Partial credit', value:pbqPartialCount, color:'#a9761d'},
    {label:'Unattempted', value:Math.max(0,pbqUnattempted), color:'var(--border)'},
  ];

  // Flashcard review progress
  const fc = flashcardStats();
  const fcSegments = [
    {label:'Reviewed', value:fc.seen, color:'#0ea5e9'},
    {label:'Not yet reviewed', value:fc.total-fc.seen, color:'var(--border)'},
  ];

  // Daily goal
  const todayCount = progress.dailyLog[todayKey()] || 0;
  const goal = settings.dailyGoal || 20;
  const goalPct = Math.min(100, Math.round(todayCount/goal*100));
  const daysActive = Object.keys(progress.dailyLog).length;

  // General-reference vs objective-tagged
  const generalRefCount = QBANK.filter(q=>!q.obj).length;

  // Per-objective grid, sorted by domain then objective id
  const objCards = DOMAINS.map(d=>d.objectives.map(o=>{
    const s = objStats(o.id);
    const p = objPoints(o.id);
    let inc=0; QBANK.filter(q=>q.obj===o.id).forEach(q=>{ if(progress.seen[q.id] && !progress.correct[q.id]) inc++; });
    const unatt = Math.max(0, s.total - s.correct - inc);
    const segs = [
      {label:'Correct', value:s.correct, color:'#16a34a'},
      {label:'Incorrect', value:inc, color:'#dc2626'},
      {label:'Unattempted', value:unatt, color:'var(--border)'},
    ];
    return '<div class="obj-card" data-domain-filter="'+d.id+'">'+
      '<div class="obj-card-head">'+
        '<span><span class="obj-card-id">'+o.id+'</span><span class="obj-card-title">'+o.title+'</span></span>'+
        '<span class="points-pill">'+p.earned.toFixed(1)+' / '+p.possible.toFixed(1)+' pts</span>'+
      '</div>'+
      '<div class="obj-card-body">'+
        donutChart(segs, s.pct+'%', s.total+' Qs', 'donut-sm')+
        '<div class="obj-card-stats">'+
          '<div class="progress-track"><div class="progress-fill" style="width:'+s.pct+'%"></div></div>'+
          '<div class="muted" style="margin-top:6px;">'+s.correct+' correct / '+s.total+' total</div>'+
        '</div>'+
      '</div>'+
      '<a class="btn secondary" href="#/objective/'+o.id+'">Practice '+o.id+'</a>'+
    '</div>';
  }).join('')).join('');

  main.innerHTML =
    '<div class="eyebrow">Cisco CCNA &middot; 200-301</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 6px;">Welcome back</h1>'+
    '<p class="muted" style="margin-bottom:24px;">Track your readiness across all four exam domains and jump straight into focused practice.</p>'+

    '<div class="card">'+
      '<div class="readiness-hero">'+
        donutChart([{label:'Earned', value:rScore.earned, color:'#16a34a'},{label:'Remaining', value:Math.max(0,rScore.possible-rScore.earned), color:'var(--border)'}], rPct+'%', 'readiness', 'donut-lg')+
        '<div class="readiness-copy">'+
          '<div class="readiness-num">Readiness Score</div>'+
          '<div style="font-family:var(--font-body); font-size:1.6rem; font-weight:700;">'+rScore.earned.toFixed(1)+' <span class="muted" style="font-size:1rem; font-weight:400;">/ '+rScore.possible.toFixed(1)+' points</span></div>'+
          '<p class="muted" style="margin:6px 0 0; font-size:0.82rem;">Each objective contributes points proportional to its real exam weight. Earn points by answering its questions correctly.</p>'+
          '<div class="readiness-breakdown">'+
            '<div class="readiness-chip"><b>'+seenCount+' / '+totalQ+'</b>Questions answered</div>'+
            '<div class="readiness-chip"><b>'+overallPct+'%</b>Overall accuracy</div>'+
            '<div class="readiness-chip"><b>'+fc.seen+' / '+fc.total+'</b>Flashcards reviewed</div>'+
            '<div class="readiness-chip"><b>'+pbqAttempted+' / '+PBQS.length+'</b>PBQs attempted</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+

    '<div class="grid grid-3">'+
      '<div class="card"><div class="stat-icon">'+icon('quiz')+'</div><div class="stat-num">'+totalQ+'</div><div class="stat-label">Practice questions</div></div>'+
      '<div class="card"><div class="stat-icon">'+icon('check')+'</div><div class="stat-num">'+overallPct+'%</div><div class="stat-label">Accuracy so far ('+seenCount+' answered)</div></div>'+
      '<div class="card"><div class="stat-icon">'+icon('cards')+'</div><div class="stat-num">'+ALL_FLASHCARDS.length+'</div><div class="stat-label">Flashcards available</div></div>'+
    '</div>'+

    '<div class="card">'+
      '<div class="card-icon-row">'+icon('quiz','icon-lg')+'<strong>Jump into practice</strong></div>'+
      '<p class="muted">Take a mixed quiz across all four domains, weighted toward higher-value objectives.</p>'+
      '<a class="btn" href="#/quiz">Start practice quiz</a> '+
      '<a class="btn secondary" href="#/pbq">Try a PBQ</a> '+
      '<a class="btn secondary" href="#/flashcards">Review flashcards</a>'+
    '</div>'+

    '<h2 style="font-family:var(--font-body); font-size:1.15rem;">Today\'s goal &amp; recent activity</h2>'+
    '<div class="card">'+
      '<div class="muted" style="display:flex; justify-content:space-between; margin-bottom:2px;"><span>'+todayCount+' of '+goal+' questions answered today</span><span>'+goalPct+'%</span></div>'+
      '<div class="goal-bar-track"><div class="goal-bar-fill" style="width:'+goalPct+'%"></div></div>'+
      '<div class="muted" style="margin-top:8px; font-size:0.78rem;">Active on '+daysActive+' day'+(daysActive===1?'':'s')+' so far. Adjust your daily goal in Settings.</div>'+
      '<div class="muted" style="margin-top:14px; font-size:0.74rem; text-transform:uppercase; letter-spacing:0.03em;">Last 7 days</div>'+
      sparklineHTML(7)+
    '</div>'+

    '<h2 style="font-family:var(--font-body); font-size:1.15rem;">Performance breakdown</h2>'+
    '<div class="grid grid-2">'+
      '<div class="card"><div class="card-icon-row">'+icon('check','icon-lg')+'<strong>Overall accuracy</strong></div>'+
        '<div class="donut-wrap">'+
          donutChart(accuracySegments, overallPct+'%', 'correct')+
          chartLegend(accuracySegments, false)+
        '</div>'+
      '</div>'+
      '<div class="card"><div class="card-icon-row">'+icon('program','icon-lg')+'<strong>Question bank composition</strong></div>'+
        '<div class="donut-wrap">'+
          donutChart(compSegments, totalQ, 'total questions')+
          chartLegend(compSegments, true)+
        '</div>'+
      '</div>'+
      '<div class="card"><div class="card-icon-row">'+icon('pbq','icon-lg')+'<strong>PBQ outcomes</strong></div>'+
        '<div class="donut-wrap">'+
          donutChart(pbqSegments, pbqAvgPct+'%', 'avg score')+
          chartLegend(pbqSegments, false)+
        '</div>'+
      '</div>'+
      '<div class="card"><div class="card-icon-row">'+icon('cards','icon-lg')+'<strong>Flashcard review progress</strong></div>'+
        '<div class="donut-wrap">'+
          donutChart(fcSegments, fc.pct+'%', 'reviewed')+
          chartLegend(fcSegments, false)+
        '</div>'+
      '</div>'+
    '</div>'+

    '<div class="card">'+
      '<div class="card-icon-row">'+icon('dashboard','icon-lg')+'<strong>Your accuracy vs. exam weight, by domain</strong></div>'+
      '<p class="muted" style="margin-bottom:0;">Taller gray bars mean that domain is worth more on the real exam — a good signal for where to focus.</p>'+
      domainBarsChart()+
    '</div>'+

    '<div class="card">'+
      '<div class="card-icon-row">'+icon('pbq','icon-lg')+'<strong>PBQ &amp; reference stats</strong></div>'+
      '<div class="metric-mini-row">'+
        '<div class="metric-mini"><b>'+pbqAttempted+' / '+PBQS.length+'</b><span>PBQs attempted</span></div>'+
        '<div class="metric-mini"><b>'+pbqAvgPct+'%</b><span>Average PBQ score</span></div>'+
        '<div class="metric-mini"><b>'+pbqPerfectCount+'</b><span>Perfect PBQ attempts</span></div>'+
        '<div class="metric-mini"><b>'+generalRefCount+'</b><span>General-reference questions (not tied to one objective)</span></div>'+
      '</div>'+
    '</div>'+

    '<h2 style="font-family:var(--font-body); font-size:1.15rem;">Domain progress</h2>'+
    '<div class="grid grid-2">'+domainCards+'</div>'+

    '<h2 style="font-family:var(--font-body); font-size:1.15rem;">Objective-by-objective breakdown</h2>'+
    '<p class="muted">Every objective\'s point value is proportional to its real exam weight. Filter by domain, or click any card to jump straight into a focused quiz.</p>'+
    '<div class="filter-row" id="objGridFilter">'+
      '<button class="filter-btn active" data-filter="all">All domains</button>'+
      DOMAINS.map(d=>'<button class="filter-btn" data-filter="'+d.id+'">'+d.id+' '+d.title+'</button>').join('')+
    '</div>'+
    '<div class="obj-grid" id="objGrid">'+objCards+'</div>';

  const filterWrap = document.getElementById('objGridFilter');
  const grid = document.getElementById('objGrid');
  filterWrap.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{
    filterWrap.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const f = b.getAttribute('data-filter');
    grid.querySelectorAll('.obj-card').forEach(card=>{
      card.style.display = (f==='all' || card.getAttribute('data-domain-filter')===f) ? '' : 'none';
    });
  }));
}

/* ============ QUIZ ============ */
function renderQuizStart(main, objId){
  const pool = objId ? QBANK.filter(q=>q.obj===objId) : QBANK;
  const label = objId ? (objId+' '+OBJ_INDEX[objId].title) : 'All domains (mixed)';
  const defaultN = Math.min(settings.quizDefaultSize || 10, pool.length);
  const options = [10,25,50,100,pool.length].filter((v,i,a)=>v>0 && a.indexOf(v)===i);
  main.innerHTML =
    '<div class="eyebrow">Practice quiz</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 10px;">'+label+'</h1>'+
    (objId?'<div class="card"><div class="eyebrow">Study notes</div>'+(SUBS[objId]?'<p class="muted" style="margin-bottom:6px">Sub-objectives: '+SUBS[objId].map(x=>objId+'.'+x).join(' · ')+'</p>':'')+'<p>'+(NOTES[objId]||'')+'</p></div>':'')+
    '<div class="card">'+
      '<p class="muted">'+pool.length+' questions available in this set. Choose how many to attempt.</p>'+
      '<div style="display:flex; gap:10px; flex-wrap:wrap; margin:14px 0;">'+
        options.map(n=>'<button class="btn '+(n===defaultN?'':'secondary')+'" data-n="'+n+'">'+n+' questions'+(n===defaultN?' (your default)':'')+'</button>').join('')+
      '</div>'+
      '<button class="btn" id="startQuizBtn" data-n="'+defaultN+'">Start quiz ('+defaultN+' questions)</button>'+
    '</div>';
  main.querySelectorAll('[data-n]').forEach(b=>b.addEventListener('click',()=>{
    const n = parseInt(b.getAttribute('data-n'),10);
    startQuiz(pool, n, main);
  }));
}

function appConfirm(o){
  const prev=document.activeElement;
  const ov=document.createElement('div');ov.className='app-overlay';
  ov.innerHTML='<div class="app-dialog" role="alertdialog" aria-modal="true" aria-labelledby="adT" aria-describedby="adM"><h3 id="adT"></h3><p id="adM"></p><div class="app-actions"></div></div>';
  ov.querySelector('#adT').textContent=o.title||'Are you sure?';
  ov.querySelector('#adM').textContent=o.message||'';
  const act=ov.querySelector('.app-actions');
  const close=()=>{document.removeEventListener('keydown',key);ov.remove();if(prev&&prev.focus)prev.focus();};
  const mk=(label,cls,fn)=>{const b=document.createElement('button');b.className='btn '+cls;b.textContent=label;b.addEventListener('click',()=>{close();if(fn)fn();});act.appendChild(b);return b;};
  if(o.cancelText!==null)mk(o.cancelText||'Cancel','secondary',o.onCancel);
  const ok=mk(o.confirmText||'OK',o.danger?'danger':'',o.onConfirm);
  const key=e=>{if(e.key==='Escape'){close();if(o.onCancel)o.onCancel();}else if(e.key==='Tab'){const bs=act.querySelectorAll('button');const f=bs[0],l=bs[bs.length-1];if(e.shiftKey&&document.activeElement===f){e.preventDefault();l.focus();}else if(!e.shiftKey&&document.activeElement===l){e.preventDefault();f.focus();}}};
  document.addEventListener('keydown',key);
  ov.addEventListener('mousedown',e=>{if(e.target===ov){close();if(o.onCancel)o.onCancel();}});
  document.body.appendChild(ov);ok.focus();
}
function appToast(msg){
  const old=document.querySelector('.app-toast');if(old)old.remove();
  const t=document.createElement('div');t.className='app-toast';t.setAttribute('role','status');t.textContent=msg;
  document.body.appendChild(t);setTimeout(()=>t.remove(),2600);
}
function shuffleChoices(q){
  const isTF = q.c.length===2 && q.c.indexOf('True')>=0 && q.c.indexOf('False')>=0;
  const right = q.c[q.a];
  const c = isTF ? ['True','False'] : shuffle(q.c);
  return Object.assign({}, q, {c:c, a:c.indexOf(right)});
}
function startQuiz(pool, n, main){
  const chosen = shuffle(pool).slice(0, Math.min(n, pool.length)).map(shuffleChoices);
  quizState = {questions:chosen, idx:0, answers:{}, score:0, pool:pool, n:n};
  renderQuizQuestion(main);
}
function renderQuizQuestion(main){
  const st = quizState;
  const q = st.questions[st.idx];
  const answered = st.answers[q.id] !== undefined;
  const objLabel = q.obj ? ('Objective '+q.obj) : 'General reference';
  const objMeta = (q.obj && OBJ_INDEX[q.obj]) ? OBJ_INDEX[q.obj].title : 'General IT/security terminology — not tied to a specific numbered objective';
  const choiceHTML = q.c.map((c,i)=>{
    let cls='choice';
    if(answered){
      if(i===q.a) cls+=' correct';
      else if(i===st.answers[q.id]) cls+=' incorrect';
    }
    return '<div class="'+cls+'" data-i="'+i+'"><span class="choice-letter">'+String.fromCharCode(65+i)+'</span><span>'+c+'</span></div>';
  }).join('');
  main.innerHTML =
    '<div class="eyebrow">Question '+(st.idx+1)+' of '+st.questions.length+' · '+objLabel+'</div>'+
    '<div class="card">'+
      '<div class="q-meta">'+objMeta+'</div>'+
      '<div class="q-text">'+q.q+'</div>'+
      '<div id="choiceWrap">'+choiceHTML+'</div>'+
      (answered ? '<div class="explain">'+(st.answers[q.id]===q.a ? '<span class="pill correct">Correct</span> ' : '<span class="pill wrong">Incorrect</span> ')+q.e+'</div>' : '')+
      '<div class="quiz-nav">'+
        '<button class="btn secondary" id="quizExit">Exit to menu</button>'+
        '<button class="btn secondary" id="quizReset">Reset quiz</button>'+
        '<button class="btn" id="quizNext" '+(answered?'':'disabled')+'>'+(st.idx===st.questions.length-1?'Finish':'Next question')+'</button>'+
      '</div>'+
    '</div>'+
    '<div class="progress-track"><div class="progress-fill" style="width:'+Math.round(((st.idx)/st.questions.length)*100)+'%"></div></div>';

  if(!answered){
    main.querySelectorAll('#choiceWrap .choice').forEach(el=>el.addEventListener('click',()=>{
      const i = parseInt(el.getAttribute('data-i'),10);
      st.answers[q.id]=i;
      progress.seen[q.id]=true;
      if(i===q.a){ progress.correct[q.id]=true; st.score++; } else { delete progress.correct[q.id]; }
      logDailyActivity();
      saveProgress(progress);
      renderQuizQuestion(main);
    }));
  }
  document.getElementById('quizExit').addEventListener('click',()=>{ location.hash='#/dashboard'; });
  document.getElementById('quizReset').addEventListener('click',()=>{ if(!st.pool) return; const redo=()=>startQuiz(st.pool, st.n, main); if(Object.keys(st.answers).length===0) redo(); else appConfirm({title:'Reset this quiz?',message:'Your answers so far will be cleared and the questions will be reshuffled.',confirmText:'Reset quiz',danger:true,onConfirm:redo}); });
  const nextBtn = document.getElementById('quizNext');
  if(answered) nextBtn.addEventListener('click',()=>{
    if(st.idx < st.questions.length-1){ st.idx++; renderQuizQuestion(main); }
    else renderQuizResults(main);
  });
}
function renderQuizResults(main){
  const st = quizState;
  const pct = Math.round((st.score/st.questions.length)*100);
  main.innerHTML =
    '<div class="eyebrow">Quiz complete</div>'+
    '<div class="card" style="text-align:center;">'+
      '<div class="stat-num" style="font-size:2.6rem;">'+pct+'%</div>'+
      '<div class="muted" style="margin-bottom:16px;">'+st.score+' of '+st.questions.length+' correct</div>'+
      '<button class="btn" id="retryBtn">Take another quiz</button> '+
      '<a class="btn secondary" href="#/dashboard">Back to dashboard</a>'+
    '</div>';
  document.getElementById('retryBtn').addEventListener('click',()=>{ location.hash='#/quiz'; });
}

/* ============ FLASHCARDS ============ */
/* Acronym flashcards, generated from the same audited ACRONYMS data used for questions/PBQs,
   so the objective tagging stays consistent everywhere in the app. */
const ACRONYM_FLASHCARDS = ACRONYMS.map(([acr, full, explain])=>({
  t: acr, sub: full, d: explain, obj: classifyAcronym(acr, full), deck:'acronym'
}));
FLASHCARDS.forEach(f=>{ f.deck = 'concept'; });
const ALL_FLASHCARDS = FLASHCARDS.concat(ACRONYM_FLASHCARDS);
ALL_FLASHCARDS.forEach((f,i)=>f.id='fc'+i);
function flashcardStats(){
  const total = ALL_FLASHCARDS.length;
  let seen=0;
  ALL_FLASHCARDS.forEach(f=>{ if(progress.flashSeen[f.id]) seen++; });
  return {total, seen, pct: total? Math.round(seen/total*100):0};
}

let fcState = {order:[], idx:0, flipped:false, deck:'all'};
function fcDeckList(){
  if(fcState.deck==='concept') return FLASHCARDS;
  if(fcState.deck==='acronym') return ACRONYM_FLASHCARDS;
  return ALL_FLASHCARDS;
}
function renderFlashcards(main){
  const deck = fcDeckList();
  if(!fcState.order.length || fcState.order.length !== deck.length || fcState._deckKey !== fcState.deck){
    fcState.order = shuffle(deck.map((_,i)=>i));
    fcState.idx = 0;
    fcState._deckKey = fcState.deck;
  }
  const deckTabs = [
    ['all','All ('+ALL_FLASHCARDS.length+')'],
    ['concept','Concepts ('+FLASHCARDS.length+')'],
    ['acronym','Acronyms ('+ACRONYM_FLASHCARDS.length+')']
  ];
  main.innerHTML =
    '<div class="eyebrow">Flashcards</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 10px;">Key terms &amp; acronyms</h1>'+
    '<div class="tab-row">'+deckTabs.map(([k,label])=>'<button class="tab-btn'+(fcState.deck===k?' active':'')+'" data-deck="'+k+'">'+label+'</button>').join('')+'</div>'+
    '<p class="muted">Card '+(fcState.idx+1)+' of '+fcState.order.length+'. Click the card to flip.</p>'+
    '<div class="card flashcard" id="fcCard"></div>'+
    '<div class="fc-controls">'+
      '<button class="btn secondary" id="fcPrev">Previous</button>'+
      '<button class="btn secondary" id="fcShuffle">'+icon('refresh')+' Shuffle</button>'+
      '<button class="btn" id="fcNext">Next</button>'+
    '</div>';
  renderFCCard();
  document.getElementById('fcCard').addEventListener('click',()=>{
    fcState.flipped=!fcState.flipped;
    if(fcState.flipped){
      const card = fcDeckList()[fcState.order[fcState.idx]];
      if(card && card.id && !progress.flashSeen[card.id]){ progress.flashSeen[card.id]=true; saveProgress(progress); }
    }
    renderFCCard();
  });
  document.getElementById('fcPrev').addEventListener('click',()=>{ fcState.idx=(fcState.idx-1+fcState.order.length)%fcState.order.length; fcState.flipped=false; renderFlashcards(main); });
  document.getElementById('fcNext').addEventListener('click',()=>{ fcState.idx=(fcState.idx+1)%fcState.order.length; fcState.flipped=false; renderFlashcards(main); });
  document.getElementById('fcShuffle').addEventListener('click',()=>{ fcState.order=shuffle(fcDeckList().map((_,i)=>i)); fcState.idx=0; fcState.flipped=false; renderFlashcards(main); });
  main.querySelectorAll('[data-deck]').forEach(b=>b.addEventListener('click',()=>{
    fcState.deck = b.getAttribute('data-deck');
    fcState.order = [];
    fcState.flipped = false;
    renderFlashcards(main);
  }));
}
function renderFCCard(){
  const deck = fcDeckList();
  const card = deck[fcState.order[fcState.idx]];
  const cardEl = document.getElementById('fcCard');
  if(!fcState.flipped){
    cardEl.textContent = card.t;
  } else if(card.deck==='acronym'){
    cardEl.innerHTML = '<span>'+card.sub+'</span>'+(card.d ? '<span class="fc-explain">'+card.d+'</span>' : '');
  } else {
    cardEl.textContent = card.d;
  }
}

/* ============ PBQ ============ */
function renderPBQList(main, domainFilter){
  const filtered = domainFilter ? PBQS.filter(p=>p.obj && p.obj.startsWith(domainFilter[0])) : PBQS;
  const filterBar = '<div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px;">'+
    '<button class="btn '+(!domainFilter?'':'secondary')+'" data-domfilter="">All ('+PBQS.length+')</button>'+
    DOMAINS.map(d=>{
      const n = PBQS.filter(p=>p.obj && p.obj.startsWith(d.id[0])).length;
      return '<button class="btn '+(domainFilter===d.id?'':'secondary')+'" data-domfilter="'+d.id+'">'+d.id+' ('+n+')</button>';
    }).join('')+
  '</div>';
  main.innerHTML =
    '<div class="eyebrow">Performance-Based Questions</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 10px;">Scenario practice</h1>'+
    '<p class="muted">PBQs on the real exam use matching, ordering, and drag-and-drop. Every exercise below is tagged to the exam objective it draws from.</p>'+
    filterBar+
    '<div class="grid grid-2">'+filtered.map(p=>{
      const i = PBQS.indexOf(p);
      const objLabel = p.obj ? (p.obj+' · '+OBJ_INDEX[p.obj].title) : 'General reference';
      return '<div class="card"><div class="card-icon-row">'+icon('pbq','icon-lg')+'<strong>'+p.title+'</strong></div>'+
        '<div class="muted" style="margin-bottom:4px; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.03em;">'+objLabel+'</div>'+
        '<div class="muted" style="margin-bottom:12px;">'+(p.type==='match'?'Matching exercise':'Ordering exercise')+'</div>'+
        '<a class="btn" href="#/pbqitem/'+i+'">Start</a></div>';
    }).join('')+
    '</div>';
  main.querySelectorAll('[data-domfilter]').forEach(b=>b.addEventListener('click',()=>{
    renderPBQList(main, b.getAttribute('data-domfilter')||null);
  }));
}
function renderPBQItem(main, i){
  const p = PBQS[i];
  const objLabel = p.obj ? (p.obj+' · '+OBJ_INDEX[p.obj].title) : 'General reference';
  main.innerHTML = '<div class="eyebrow">Performance-Based Question · '+objLabel+'</div><h1 style="font-family:var(--font-body); margin:0 0 10px;">'+p.title+'</h1><div class="card" id="pbqBody"></div><div class="quiz-nav"><a class="btn secondary" href="#/pbq">Back to list</a><button class="btn secondary" id="pbqReset">Reset</button><button class="btn" id="pbqCheck">Check answers</button></div>';
  const body = document.getElementById('pbqBody');
  document.getElementById('pbqReset').addEventListener('click',()=>renderPBQItem(main,i));
  if(p.type==='match'){
    body.innerHTML = p.pairs.map((pair,idx)=>
      '<div class="match-row"><div>'+pair[0]+'</div><select class="match-select" data-idx="'+idx+'"><option value="">— choose —</option>'+
      p.options.map(o=>'<option value="'+o.replace(/"/g,'&quot;')+'">'+o+'</option>').join('')+'</select></div>'
    ).join('');
  } else {
    const shuffled = shuffle(p.items.map((t,idx)=>({t,idx})));
    body.innerHTML = '<p class="muted">Drag to reorder into the correct sequence (top = first).</p><div id="pbqOrderList">'+
      shuffled.map(s=>'<div class="pbq-item" draggable="true" data-correct="'+s.idx+'">'+icon('flag')+'<span>'+s.t+'</span></div>').join('')+'</div>';
    enableDrag(document.getElementById('pbqOrderList'));
  }
  document.getElementById('pbqCheck').addEventListener('click',()=>{
    if(p.type==='match'){
      let correct=0;
      body.querySelectorAll('.match-select').forEach(sel=>{
        const idx = parseInt(sel.getAttribute('data-idx'),10);
        const ok = sel.value === p.pairs[idx][1];
        sel.style.borderColor = sel.value ? (ok?'var(--success)':'var(--danger)') : 'var(--border)';
        if(ok) correct++;
      });
      showPbqResult(correct, p.pairs.length, i);
    } else {
      const items = [...body.querySelectorAll('.pbq-item')];
      let correct=0;
      items.forEach((el,idx)=>{ if(parseInt(el.getAttribute('data-correct'),10)===idx){ correct++; el.style.borderColor='var(--success)'; } else { el.style.borderColor='var(--danger)'; } });
      showPbqResult(correct, items.length, i);
    }
  });
}
function showPbqResult(correct,total,pbqIndex){
  let el = document.getElementById('pbqResult');
  if(!el){ el=document.createElement('div'); el.id='pbqResult'; el.className='explain'; document.getElementById('pbqBody').appendChild(el); }
  el.innerHTML = '<span class="pill '+(correct===total?'correct':'wrong')+'">'+correct+' / '+total+' correct</span>';
  if(pbqIndex!==undefined){
    progress.pbq[pbqIndex] = {correct, total, at: Date.now()};
    saveProgress(progress);
  }
}
function enableDrag(list){
  let dragEl=null;
  list.querySelectorAll('.pbq-item').forEach(item=>{
    item.addEventListener('dragstart',()=>{ dragEl=item; item.classList.add('dragging'); });
    item.addEventListener('dragend',()=>{ item.classList.remove('dragging'); dragEl=null; });
  });
  list.addEventListener('dragover',e=>{
    e.preventDefault();
    const after = [...list.querySelectorAll('.pbq-item:not(.dragging)')].reduce((closest,child)=>{
      const box = child.getBoundingClientRect();
      const offset = e.clientY - box.top - box.height/2;
      if(offset<0 && offset>closest.offset) return {offset, element:child};
      return closest;
    }, {offset:-Infinity, element:null}).element;
    if(!dragEl) return;
    if(after==null) list.appendChild(dragEl); else list.insertBefore(dragEl, after);
  });
}

/* ============ ACRONYMS ============ */
function renderAcronyms(main){
  main.innerHTML =
    '<div class="eyebrow">Reference</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 10px;">Acronym glossary</h1>'+
    '<p class="muted">The 200-301 exam draws heavily on the acronyms and terms in the 200-301 v2.0 objectives, each with a plain-language explanation. Search to filter.</p>'+
    '<div class="acr-toolbar"><input class="acr-search" id="acrSearch" placeholder="Search acronyms, expansions, or explanations…"></div>'+
    '<div class="card"><table class="acr-table" id="acrTable"><thead><tr><th style="width:100px;">Acronym</th><th style="width:220px;">Meaning</th><th>Explanation</th></tr></thead><tbody></tbody></table></div>';
  const tbody = document.querySelector('#acrTable tbody');
  function draw(filter){
    const f = (filter||'').toLowerCase();
    const rows = ACRONYMS.filter(([a,b,c])=> !f || a.toLowerCase().includes(f) || b.toLowerCase().includes(f) || (c||'').toLowerCase().includes(f));
    tbody.innerHTML = rows.map(([a,b,c])=>'<tr><td><strong>'+a+'</strong></td><td>'+b+'</td><td class="muted">'+(c||'')+'</td></tr>').join('') || '<tr><td colspan="3" class="muted">No matches.</td></tr>';
  }
  draw('');
  document.getElementById('acrSearch').addEventListener('input', e=>draw(e.target.value));
}

/* ============ STUDY TIPS ============ */
function renderStudyTips(main){
  main.innerHTML =
    '<div class="eyebrow">Guidance</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 4px;">Study tips</h1>'+
    '<p class="muted" style="margin-bottom:18px;">Quick tips first, then a full breakdown of study methods with exactly how to run each one in this app.</p>'+
    TIPS.map(t=>
      '<div class="card tip-card">'+
        '<div class="tip-head"><div class="tip-icon">'+icon(t.icon)+'</div><div><strong>'+t.title+'</strong><p class="muted" style="margin:4px 0 0;">'+t.body+'</p></div></div>'+
        '<ul class="tip-list">'+t.list.map(li=>'<li>'+li+'</li>').join('')+'</ul>'+
      '</div>'
    ).join('')+
    '<div class="card tip-apply"><strong>Exam-day reminder:</strong> 200-301 allows a maximum of 120 minutes across five domains.</div>'+
    '<h2 style="font-family:var(--font-body); font-size:1.2rem; margin-top:32px;">Study methods, in depth</h2>'+
    '<p class="muted" style="margin-bottom:16px;">Five evidence-based study techniques, each with why it works and exactly which feature of this app to use to apply it.</p>'+
    STUDY_METHODS.map(m=>
      '<div class="card method-card">'+
        '<div class="method-head">'+icon(m.icon,'icon-lg')+'<div><strong style="font-family:var(--font-body); font-size:1.05rem;">'+m.name+'</strong><p class="muted" style="margin:4px 0 0;">'+m.summary+'</p></div></div>'+
        '<div class="method-cols">'+
          '<div class="method-col"><div class="method-col-title">Why it works</div><ul>'+m.breakdown.map(li=>'<li>'+li+'</li>').join('')+'</ul></div>'+
          '<div class="method-col"><div class="method-col-title">Apply it in this app</div><ul>'+m.application.map(li=>'<li>'+li+'</li>').join('')+'</ul></div>'+
        '</div>'+
      '</div>'
    ).join('');
}

/* ============ SETTINGS ============ */
const THEME_GROUPS = {
  'Core': ['light','dark','sepia','high-contrast','plain','mono'],
  'Solarized / Editor': ['solarized-light','solarized-dark','nord','dracula'],
  'Nature': ['ocean','forest','sunset','pastel','rose','slate','neon'],
  'Aurora': ['aurora-dawn','aurora-dusk','aurora-night'],
  'Autumn': ['autumn-amber','autumn-rust','autumn-umber'],
  'Reef': ['reef-shallow','reef-lagoon','reef-abyss'],
  'Desert': ['desert-dune','desert-mesa','desert-canyon'],
  'Lavender': ['lavender-bloom','lavender-dusk','lavender-twilight'],
  'Meadow': ['meadow-spring','meadow-summer','meadow-moss'],
  'Retro': ['retro-cream','retro-mustard','retro-avocado','retro-rust'],
  'Royal': ['royal-gold','royal-sapphire','royal-amethyst'],
  'Volcanic': ['volcanic-ember','volcanic-magma','volcanic-obsidian'],
  'Arctic': ['arctic-frost','arctic-glacier','arctic-polar-night'],
};
const LAYOUTS = [
  {id:'default', label:'Sidebar left (default)', cls:'lp-default'},
  {id:'sidebar-right', label:'Sidebar right', cls:'lp-sidebar-right'},
  {id:'top-bar', label:'Top bar', cls:'lp-top-bar'},
  {id:'bottom-bar', label:'Bottom bar', cls:'lp-bottom-bar'},
  {id:'top-tabs', label:'Top tabs', cls:'lp-top-tabs'},
  {id:'boxed', label:'Boxed', cls:'lp-boxed'},
  {id:'drawer', label:'Drawer', cls:'lp-drawer'},
  {id:'floating', label:'Floating', cls:'lp-floating'},
  {id:'icon-rail', label:'Icon rail', cls:'lp-icon-rail'},
  {id:'wide-panel', label:'Wide panel', cls:'lp-wide-panel'},
];
function layoutPreviewHTML(l){
  return '<div class="layout-preview '+l.cls+'"><div class="lp-side">'+(l.cls==='lp-top-tabs'?'<i></i><i></i><i></i>':'')+'</div><div class="lp-main"><i></i><i></i><i></i></div></div>';
}
function themeSwatchHTML(t, isActive){
  const c = THEME_COLOR_MAP[t] || THEME_COLOR_MAP.light;
  return '<button class="theme-swatch'+(isActive?' active':'')+'" data-theme="'+t+'" title="'+t+'">'+
    '<span class="swatch-preview">'+
      '<i style="background:'+c.bg+'"></i>'+
      '<i style="background:'+c.bgElev+'"></i>'+
      '<i style="background:'+c.accent+'"></i>'+
    '</span>'+
    '<span class="swatch-label-row" style="background:'+c.bgElev+'; color:'+c.text+';">'+
      '<span>'+t+'</span>'+
      (isActive ? '<span class="swatch-check" style="background:'+c.accent+';">'+icon('check')+'</span>' : '')+
    '</span>'+
  '</button>';
}
const ACCENT_PRESETS = ['#2f5d50','#2563eb','#7c3aed','#dc2626','#f59e0b','#0ea5e9','#16a34a','#db2777'];
function renderSettings(main){
  const fs = settings.fontSize || DEFAULT_FONT_SIZE;
  main.innerHTML =
    '<div class="eyebrow">Preferences</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 10px;">Settings</h1>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Theme <span class="muted" style="font-weight:400; font-size:0.8rem;">— live color preview per option</span></strong>'+
      Object.entries(THEME_GROUPS).map(([group,list])=>
        '<div class="theme-group"><div class="theme-group-title">'+group+'</div><div class="theme-row">'+
          list.map(t=>themeSwatchHTML(t, settings.theme===t)).join('')+
        '</div></div>'
      ).join('')+
    '</div>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Layout <span class="muted" style="font-weight:400; font-size:0.8rem;">— mini preview of each structure</span></strong>'+
      '<div class="theme-row">'+
        LAYOUTS.map(l=>'<button class="theme-swatch layout-option'+((settings.layout||'default')===l.id?' active':'')+'" data-layout="'+l.id+'">'+
          layoutPreviewHTML(l)+
          '<span class="layout-option-label">'+l.label+'</span>'+
        '</button>').join('')+
      '</div>'+
    '</div>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Accent color <span class="muted" style="font-weight:400; font-size:0.8rem;">— overrides the current theme\'s accent everywhere</span></strong>'+
      '<div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:12px;">'+
        '<input type="color" id="accentPicker" value="'+(settings.accent || THEME_COLOR_MAP[settings.theme]?.accent || '#2f5d50')+'" style="width:48px; height:38px; border:1px solid var(--border); border-radius:var(--radius-sm); padding:2px; background:var(--bg-elev); cursor:pointer;">'+
        '<button class="btn secondary" id="accentReset">Use theme default</button>'+
        (settings.accent ? '<span class="pill">Custom accent active</span>' : '')+
      '</div>'+
      '<div class="theme-row">'+ACCENT_PRESETS.map(c=>'<button class="theme-swatch" data-accent-preset="'+c+'" style="min-height:32px; background:'+c+';" title="'+c+'"></button>').join('')+'</div>'+
    '</div>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Density</strong>'+
      '<div class="theme-row">'+
        [['compact','Compact'],['comfortable','Comfortable'],['spacious','Spacious']].map(([k,label])=>
          '<button class="btn '+((settings.density||'comfortable')===k?'':'secondary')+'" data-density="'+k+'">'+label+'</button>'
        ).join('')+
      '</div>'+
    '</div>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Corner style</strong>'+
      '<div class="theme-row">'+
        [['theme','Theme default'],['sharp','Sharp'],['soft','Soft'],['rounded','Rounded'],['pill','Extra round']].map(([k,label])=>
          '<button class="btn '+((settings.radius||'theme')===k?'':'secondary')+'" data-radius="'+k+'" style="border-radius:'+(RADIUS_PRESETS[k]||'10px')+';">'+label+'</button>'
        ).join('')+
      '</div>'+
    '</div>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Motion</strong>'+
      '<div class="theme-row">'+
        [['normal','Normal'],['reduced','Reduced motion']].map(([k,label])=>
          '<button class="btn '+((settings.motion||'normal')===k?'':'secondary')+'" data-motion="'+k+'">'+label+'</button>'
        ).join('')+
      '</div>'+
      '<p class="muted" style="margin:8px 0 0; font-size:0.8rem;">Reduced motion turns off transitions and animations across the site.</p>'+
    '</div>'+

    '<div class="card">'+
      '<strong style="display:block;margin-bottom:10px;">Font size <span class="muted" style="font-weight:400; font-size:0.8rem;">— rescales all text on the site, 8–24px</span></strong>'+
      '<div class="fontsize-row">'+
        '<span class="muted" style="font-size:0.75rem;">8</span>'+
        '<input type="range" id="fontSizeRange" min="8" max="24" step="1" value="'+fs+'">'+
        '<span class="muted" style="font-size:0.75rem;">24</span>'+
        '<span class="fontsize-val" id="fontSizeVal">'+fs+'px</span>'+
      '</div>'+
      '<div class="fontsize-preview" id="fontSizePreview">The quick brown fox jumps over the lazy dog. VLAN, ACL, OSPF, NAT.</div>'+
    '</div>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Study tools</strong>'+
      '<div class="setting-row"><span>Default quiz length</span>'+
        '<select id="quizDefaultSize" style="padding:7px 10px; border-radius:var(--radius-sm); border:1px solid var(--border); background:var(--bg-elev); color:var(--text);">'+
          [5,10,25,50,100].map(n=>'<option value="'+n+'" '+((settings.quizDefaultSize||10)===n?'selected':'')+'>'+n+' questions</option>').join('')+
        '</select>'+
      '</div>'+
      '<div class="setting-row" style="border-bottom:none;"><span>Daily question goal</span>'+
        '<input type="number" id="dailyGoalInput" min="5" max="500" step="5" value="'+(settings.dailyGoal||20)+'" style="width:90px; padding:7px 10px; border-radius:var(--radius-sm); border:1px solid var(--border); background:var(--bg-elev); color:var(--text);">'+
      '</div>'+
    '</div>'+

    '<div class="card">'+
      '<div class="setting-row" style="border-bottom:none;"><span>Reset all progress</span><button class="btn secondary" id="resetProgress">Reset</button></div>'+
    '</div>';

  main.querySelectorAll('[data-theme]').forEach(b=>b.addEventListener('click',()=>{ settings.theme=b.getAttribute('data-theme'); settings.accent=''; saveSettings(settings); applySettings(); renderSettings(main); }));
  main.querySelectorAll('[data-layout]').forEach(b=>b.addEventListener('click',()=>{ settings.layout=b.getAttribute('data-layout'); saveSettings(settings); applySettings(); renderSettings(main); }));
  main.querySelectorAll('[data-density]').forEach(b=>b.addEventListener('click',()=>{ settings.density=b.getAttribute('data-density'); saveSettings(settings); applySettings(); renderSettings(main); }));
  main.querySelectorAll('[data-radius]').forEach(b=>b.addEventListener('click',()=>{ settings.radius=b.getAttribute('data-radius'); saveSettings(settings); applySettings(); renderSettings(main); }));
  main.querySelectorAll('[data-motion]').forEach(b=>b.addEventListener('click',()=>{ settings.motion=b.getAttribute('data-motion'); saveSettings(settings); applySettings(); renderSettings(main); }));
  main.querySelectorAll('[data-accent-preset]').forEach(b=>b.addEventListener('click',()=>{ settings.accent=b.getAttribute('data-accent-preset'); saveSettings(settings); applySettings(); renderSettings(main); }));
  document.getElementById('accentPicker').addEventListener('input', e=>{ settings.accent = e.target.value; saveSettings(settings); applySettings(); });
  document.getElementById('accentPicker').addEventListener('change', ()=>{ renderSettings(main); });
  document.getElementById('accentReset').addEventListener('click', ()=>{ settings.accent=''; saveSettings(settings); applySettings(); renderSettings(main); });
  document.getElementById('fontSizeRange').addEventListener('input', e=>{
    settings.fontSize = parseInt(e.target.value,10);
    saveSettings(settings); applySettings();
    document.getElementById('fontSizeVal').textContent = settings.fontSize+'px';
  });
  document.getElementById('quizDefaultSize').addEventListener('change', e=>{ settings.quizDefaultSize=parseInt(e.target.value,10); saveSettings(settings); });
  document.getElementById('dailyGoalInput').addEventListener('change', e=>{
    const v = Math.max(1, parseInt(e.target.value,10)||20);
    settings.dailyGoal = v; saveSettings(settings);
  });
  document.getElementById('resetProgress').addEventListener('click',()=>{ appConfirm({title:'Reset all progress?',message:'This clears your quiz history, flashcard progress and PBQ results on this device. It cannot be undone.',confirmText:'Reset progress',danger:true,onConfirm:()=>{ progress={seen:{},correct:{},flashSeen:{},pbq:{},dailyLog:{}}; saveProgress(progress); route(); appToast('Progress reset.'); }}); });
}

/* PBQ item route hook */
window.addEventListener('hashchange', ()=>{
  const parts = location.hash.replace('#/','').split('/');
  if(parts[0]==='pbqitem'){ renderPBQItem(document.getElementById('main'), parseInt(parts[1],10)); document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active', a.getAttribute('data-route')==='pbq')); }
});

if(location.hash.startsWith('#/pbqitem/')) renderPBQItem(document.getElementById('main'), parseInt(location.hash.split('/')[2],10));
(function(){
const q=s=>document.querySelector(s);let tab='sub',C;
const TASKS=['Set the hostname to SW1','Create VLAN 10 named SALES','Put Fa0/1 in access VLAN 10','Give interface vlan 10 the IP 192.168.10.1 255.255.255.0 and no shutdown'];
function f4(x){return[x>>>24,x>>16&255,x>>8&255,x&255].join('.')}
function calc(){const ip=q('#lbIp').value.trim().split('.').map(Number),c=+q('#lbCd').value,o=q('#lbOut');if(ip.length!=4||ip.some(x=>!(x>=0&&x<=255))||!(c>=0&&c<=32)){o.innerHTML='<p class="muted">Enter a valid IPv4 address and prefix.</p>';return}
const n=((ip[0]<<24|ip[1]<<16|ip[2]<<8|ip[3])>>>0),m=c?(0xFFFFFFFF<<(32-c))>>>0:0,net=(n&m)>>>0,bc=(net|~m)>>>0;
const rows=[['Network',f4(net)+'/'+c],['Subnet mask',f4(m)],['Wildcard',f4(~m>>>0)],['Broadcast',f4(bc)],['Host range',c>=31?'n/a':f4(net+1)+' – '+f4(bc-1)],['Usable hosts',c>=31?(c==31?2:1):Math.pow(2,32-c)-2]];
o.innerHTML='<table>'+rows.map(r=>'<tr><td><strong>'+r[0]+'</strong></td><td>'+r[1]+'</td></tr>').join('')+'</table>'}
function pr(){return C.host+({user:'>',priv:'#',conf:'(config)#',vlan:'(config-vlan)#',if:'(config-if)#'})[C.mode]}
function done(){const s=C.svi[10]||{};return[C.host=='SW1',C.vl[10]=='SALES',C.ifs.f1.v==10&&C.ifs.f1.mode=='access',s.ip=='192.168.10.1 255.255.255.0'&&!!s.up]}
function draw(){const t=done();q('#lbTk').innerHTML=TASKS.map((x,i)=>(t[i]?'✅ ':'⬜ ')+x).join('<br>');
const tm=q('#lbTerm');tm.innerHTML='<pre style="margin:0;white-space:pre-wrap;font:inherit">'+C.log.replace(/</g,'&lt;')+'</pre>'+pr()+' <input id="lbIn" autocomplete="off" style="background:transparent;border:0;color:inherit;font:inherit;outline:0;width:60%">';
q('#lbIn').addEventListener('keydown',e=>{if(e.key=='Enter')run(e.target.value)});q('#lbIn').focus();tm.scrollTop=1e6}
function run(v){const p=pr();v=v.trim();let o='';const a=v.split(/\s+/),c=a.join(' ').toLowerCase();
if(c=='enable'&&C.mode=='user')C.mode='priv';
else if(/^conf(ig(ure)?)? t(erminal)?$/.test(c)&&C.mode=='priv')C.mode='conf';
else if(c=='end')C.mode='priv';
else if(c=='exit')C.mode=(C.mode=='conf'?'priv':'conf');
else if(c=='?')o='enable | configure terminal | hostname | vlan | name | interface | switchport mode access | switchport access vlan | ip address | no shutdown | show vlan brief | show ip interface brief | show running-config';
else if(a[0]=='hostname'&&C.mode=='conf'&&a[1])C.host=a[1];
else if(a[0]=='vlan'&&C.mode=='conf'&&a[1]){C.vl[a[1]]=C.vl[a[1]]||'VLAN'+a[1].padStart(4,'0');C.mode='vlan';C.cv=a[1]}
else if(a[0]=='name'&&C.mode=='vlan'&&a[1])C.vl[C.cv]=a[1];
else if(a[0]=='interface'&&C.mode=='conf'){const n=a.slice(1).join('').toLowerCase().replace('fastethernet','fa');if(n=='vlan10'){C.svi[10]=C.svi[10]||{};C.cur='svi';C.mode='if'}else if(n=='fa0/1'){C.cur='f1';C.mode='if'}else o='% Invalid interface (try fa0/1 or vlan 10)'}
else if(c=='switchport mode access'&&C.mode=='if'&&C.cur=='f1')C.ifs.f1.mode='access';
else if(a[0]=='switchport'&&a[1]=='access'&&a[2]=='vlan'&&C.mode=='if'&&C.cur=='f1'&&a[3]){if(!C.vl[a[3]]){C.vl[a[3]]='VLAN'+a[3].padStart(4,'0');o='% Access VLAN does not exist. Creating vlan '+a[3]}C.ifs.f1.v=+a[3]}
else if(a[0]=='ip'&&a[1]=='address'&&C.mode=='if'&&C.cur=='svi'&&a[3])C.svi[10].ip=a[2]+' '+a[3];
else if(c=='no shutdown'&&C.mode=='if'){if(C.cur=='svi')C.svi[10].up=1;else C.ifs.f1.up=1}
else if(/^show vlan( brief)?$/.test(c))o='VLAN Name         Ports\n'+Object.entries(C.vl).map(([k,n])=>k.padEnd(5)+n.padEnd(13)+(C.ifs.f1.v==k?'Fa0/1':'')).join('\n');
else if(c=='show ip interface brief')o='Interface   IP-Address      Status\nFa0/1       unassigned      '+(C.ifs.f1.up?'up':'down')+(C.svi[10]?'\nVlan10      '+((C.svi[10].ip||'unassigned').split(' ')[0]).padEnd(16)+(C.svi[10].up?'up':'down'):'');
else if(c=='show running-config')o='hostname '+C.host+'\n'+Object.keys(C.vl).filter(k=>k!=1).map(k=>'vlan '+k+'\n name '+C.vl[k]).join('\n');
else if(v)o='% Invalid input or wrong mode';
C.log+=p+' '+v+'\n'+(o?o+'\n':'');draw()}
function body(){const b=q('#lbBody');if(tab=='lib'){window.labLib(b);return}
if(tab=='sub'){b.innerHTML='<div class="card"><div class="eyebrow">Objective 1.3 · 4.6</div><div class="acr-toolbar"><input class="acr-search" id="lbIp" value="192.168.10.77" style="max-width:220px;flex:none"><span>/</span><input class="acr-search" id="lbCd" type="number" min="0" max="32" value="27" style="max-width:90px;flex:none"><button class="btn" id="lbGo">Calculate</button><button class="btn secondary" id="lbRs">Reset</button></div><div id="lbOut"></div></div>';q('#lbGo').addEventListener('click',calc);q('#lbRs').addEventListener('click',()=>{q('#lbIp').value='192.168.10.77';q('#lbCd').value='27';calc()});calc()}
else{C={mode:'user',host:'Switch',vl:{1:'default'},ifs:{f1:{v:1}},svi:{},log:'Switch simulator. Type ? for supported commands.\n'};b.innerHTML='<div class="card"><div class="eyebrow">Objectives 2.1 · 2.2 · 2.4</div><p class="muted">Complete every task by typing commands.</p><div id="lbTk"></div></div><div class="card" id="lbTerm" style="background:#0b0f14;color:#9ef0b2;font-family:Consolas,monospace;font-size:.85rem;height:280px;overflow:auto"></div><button class="btn secondary" id="lbReset">Reset lab</button>';q('#lbReset').addEventListener('click',body);draw()}}
window.renderLabs=function(main){main.innerHTML='<div class="eyebrow">Simulations</div><h1>Labs</h1><div class="tab-row"><button class="tab-btn'+(tab=='sub'?' active':'')+'" data-t="sub">Subnet calculator</button><button class="tab-btn'+(tab=='cli'?' active':'')+'" data-t="cli">CLI lab</button><button class="tab-btn'+(tab=='lib'?' active':'')+'" data-t="lib">Lab library (40)</button></div><div id="lbBody"></div>';main.querySelectorAll('[data-t]').forEach(b=>b.addEventListener('click',()=>{tab=b.dataset.t;window.renderLabs(main)}));body()}})();

(function(){
const LK='ccna_labs_v1';let DONE={};try{DONE=JSON.parse(localStorage.getItem(LK))||{}}catch(e){}
const sv=()=>{try{localStorage.setItem(LK,JSON.stringify(DONE))}catch(e){}};
const T=(d,c,l,n)=>[d,c,l,!!n];
const LABS=[];const L=(o,t,s,k,init,h,ds)=>LABS.push({o,t,s,k,init:init||[],h:h||'Router',ds:ds||''});
L('1.1','Fix a duplex mismatch','Gi0/1 connects to SW2, which is fixed at 100 Mbps full duplex. Late collisions are rising and the interface is shut down. Set the port to full duplex at 100 Mbps and enable it.',[T('Set Gi0/1 to full duplex','^gi0/1$','^duplex full$'),T('Keep the speed at 100 Mbps','^gi0/1$','^speed 100$'),T('Enable the interface','^gi0/1$','^shutdown$',1)],['gi0/1|duplex half','gi0/1|speed 100','gi0/1|shutdown'],'SW1');
L('1.3','Address a router for a /26 LAN and a /30 WAN','R1 Gi0/0 serves 192.168.10.0/26 and must use the first usable address. Gi0/1 is the WAN link and uses 203.0.113.2/30. Enable both interfaces.',[T('Gi0/0: first usable address of the /26','^gi0/0$','^ip address 192\\.168\\.10\\.1 255\\.255\\.255\\.192$'),T('Gi0/1: 203.0.113.2 with a /30 mask','^gi0/1$','^ip address 203\\.0\\.113\\.2 255\\.255\\.255\\.252$'),T('Enable both interfaces','^gi0/[01]$','^shutdown$',1)],[],'R1','^(gi|fa)');
L('1.3','Correct a wrong subnet mask','The LAN is 192.168.5.128/27. Gi0/0 has the right address range but the wrong mask. The router must use the first usable address of the subnet with the correct mask.',[T('Use 192.168.5.129 with the /27 mask','^gi0/0$','^ip address 192\\.168\\.5\\.129 255\\.255\\.255\\.224$')],['gi0/0|ip address 192.168.5.130 255.255.255.0'],'R1');
L('1.4','Configure IPv6 on a router interface','Enable IPv6 routing, then give Gi0/0 the global address 2001:db8:10:1::1/64 and the link-local address fe80::1.',[T('Enable IPv6 unicast routing','^global$','^ipv6 unicast-routing$'),T('Gi0/0 global address','^gi0/0$','^ipv6 address 2001:db8:10:1::1/64$'),T('Gi0/0 link-local address','^gi0/0$','^ipv6 address fe80::1 link-local$'),T('Enable Gi0/0','^gi0/0$','^shutdown$',1)],['gi0/0|shutdown'],'R1');
L('1.4','Use EUI-64 for an IPv6 address','Gi0/1 must derive its interface ID automatically from its MAC address using prefix 2001:db8:20::/64. Enable IPv6 routing and bring the interface up.',[T('Enable IPv6 unicast routing','^global$','^ipv6 unicast-routing$'),T('Use EUI-64 with the prefix','^gi0/1$','^ipv6 address 2001:db8:20::/64 eui-64$'),T('Enable Gi0/1','^gi0/1$','^shutdown$',1)],['gi0/1|shutdown'],'R1');
L('1.7','Build a router DHCP pool','R1 must lease addresses for 192.168.20.0/24. Exclude .1 through .10, use .1 as the gateway and 8.8.8.8 as DNS. Name the pool LAN.',[T('Exclude 192.168.20.1 to .10','^global$','^ip dhcp excluded-address 192\\.168\\.20\\.1 192\\.168\\.20\\.10$'),T('Pool network','^ip dhcp pool lan$','^network 192\\.168\\.20\\.0 255\\.255\\.255\\.0$'),T('Pool default router','^ip dhcp pool lan$','^default-router 192\\.168\\.20\\.1$'),T('Pool DNS server','^ip dhcp pool lan$','^dns-server 8\\.8\\.8\\.8$')],[],'R1');
L('1.7','Configure a DHCP relay','Clients on Gi0/0 (192.168.30.0/24) get no addresses because the DHCP server is at 10.10.10.5 on another network. Relay the requests and enable the interface.',[T('Relay to the DHCP server','^gi0/0$','^ip helper-address 10\\.10\\.10\\.5$'),T('Enable Gi0/0','^gi0/0$','^shutdown$',1),T('Keep the interface address','^gi0/0$','^ip address 192\\.168\\.30\\.1 255\\.255\\.255\\.0$')],['gi0/0|ip address 192.168.30.1 255.255.255.0','gi0/0|shutdown'],'R1');
L('1.7','Fix a DHCP pool with no gateway','Clients leasing from pool OFFICE receive no default gateway and can still lease the router address. Add the gateway 192.168.40.1, set a 3-day lease, and exclude 192.168.40.1 to .20.',[T('Add the default router','^ip dhcp pool office$','^default-router 192\\.168\\.40\\.1$'),T('Set a 3-day lease','^ip dhcp pool office$','^lease 3$'),T('Exclude 192.168.40.1 to .20','^global$','^ip dhcp excluded-address 192\\.168\\.40\\.1 192\\.168\\.40\\.20$')],['ip dhcp pool office|network 192.168.40.0 255.255.255.0','ip dhcp pool office|dns-server 1.1.1.1'],'R1');
L('2.1','Configure an 802.1Q trunk','Gi0/1 connects to SW2. Make it a trunk that carries only VLANs 10, 20 and 99, with VLAN 99 as the native VLAN.',[T('Set trunk mode','^gi0/1$','^switchport mode trunk$'),T('Native VLAN 99','^gi0/1$','^switchport trunk native vlan 99$'),T('Allow only VLANs 10, 20 and 99','^gi0/1$','^switchport trunk allowed vlan 10,20,99$')],[],'SW1');
L('2.1','Create a management SVI','Create VLAN 10, give interface VLAN 10 the address 192.168.10.2/24, enable it, and set the default gateway to 192.168.10.1 for remote management.',[T('Create VLAN 10','^vlan 10$','.'),T('SVI address','^vlan10$','^ip address 192\\.168\\.10\\.2 255\\.255\\.255\\.0$'),T('Enable the SVI','^vlan10$','^shutdown$',1),T('Default gateway','^global$','^ip default-gateway 192\\.168\\.10\\.1$')],['vlan 10|name MGMT'],'SW1','^vlan\\d');
L('2.1','Build a Layer 2 LACP EtherChannel','Bundle Gi0/1 and Gi0/2 into port-channel 1 using LACP active mode, then make the port-channel a trunk.',[T('Member ports use LACP active','^range','^channel-group 1 mode active$'),T('Port-channel 1 is a trunk','^po1$','^switchport mode trunk$')],[],'SW1');
L('2.1','Build a Layer 3 EtherChannel','Gi0/1 and Gi0/2 must form a routed port-channel 2 using LACP active with the address 10.1.1.1/30.',[T('Members are routed ports','^range','^no switchport$'),T('Members use LACP active','^range','^channel-group 2 mode active$'),T('Port-channel address','^po2$','^ip address 10\\.1\\.1\\.1 255\\.255\\.255\\.252$')],[],'SW1');
L('2.2','Configure a phone and PC access port','Fa0/5 connects an IP phone with a PC behind it. Put the PC in VLAN 10, the phone in voice VLAN 150, and enable PortFast.',[T('Access mode','^fa0/5$','^switchport mode access$'),T('Data VLAN 10','^fa0/5$','^switchport access vlan 10$'),T('Voice VLAN 150','^fa0/5$','^switchport voice vlan 150$'),T('PortFast','^fa0/5$','^spanning-tree portfast$')],[],'SW1');
L('2.2','Place a printer in an IoT VLAN','Create VLAN 30 named IOT and assign printer port Fa0/6 to it as an access port with PortFast.',[T('Create VLAN 30','^vlan 30$','.'),T('Name it IOT','^vlan 30$','^name iot$'),T('Fa0/6 access VLAN 30','^fa0/6$','^switchport access vlan 30$'),T('Fa0/6 PortFast','^fa0/6$','^spanning-tree portfast$')],[],'SW1');
L('2.2','Connect two types of access point','Fa0/10 connects a lightweight AP in local mode (VLAN 20 access). Fa0/11 connects a FlexConnect AP that must trunk VLANs 20 and 30. Power both ports.',[T('Fa0/10 access VLAN 20','^fa0/10$','^switchport access vlan 20$'),T('Fa0/11 trunk','^fa0/11$','^switchport mode trunk$'),T('Fa0/11 allows VLANs 20 and 30','^fa0/11$','^switchport trunk allowed vlan 20,30$'),T('Power Fa0/10 and Fa0/11','^fa0/1[01]$','^power inline auto$')],[],'SW1');
L('2.3','Switch discovery from CDP to LLDP','Policy requires vendor-neutral discovery. Enable LLDP globally, disable CDP globally, and re-enable LLDP transmit on Gi0/1.',[T('Enable LLDP','^global$','^lldp run$'),T('Disable CDP','^global$','^no cdp run$'),T('Gi0/1 transmits LLDP','^gi0/1$','^no lldp transmit$',1)],['gi0/1|no lldp transmit'],'SW1');
L('2.4','Recover a failed uplink','Gi0/1 is the uplink to 10.5.5.0/24 and is down. It is shut down and has the wrong mask. Use 10.5.5.1/24, enable it and describe it UPLINK.',[T('Correct address and mask','^gi0/1$','^ip address 10\\.5\\.5\\.1 255\\.255\\.255\\.0$'),T('Enable the interface','^gi0/1$','^shutdown$',1),T('Description UPLINK','^gi0/1$','^description uplink$')],['gi0/1|ip address 10.5.5.1 255.255.0.0','gi0/1|shutdown'],'R1');
L('2.5','Configure Rapid PVST+ roots','Use Rapid PVST+. SW1 must be the root for VLAN 10 and the backup root for VLAN 20.',[T('Rapid PVST+ mode','^global$','^spanning-tree mode rapid-pvst$'),T('Root for VLAN 10','^global$','^spanning-tree vlan 10 root primary$'),T('Backup root for VLAN 20','^global$','^spanning-tree vlan 20 root secondary$')],[],'SW1');
L('2.5','Protect an edge port','Fa0/1 faces a user. It must go straight to forwarding and shut down if a BPDU arrives. Also enable the global default so all PortFast ports get BPDU Guard.',[T('PortFast on Fa0/1','^fa0/1$','^spanning-tree portfast$'),T('BPDU Guard on Fa0/1','^fa0/1$','^spanning-tree bpduguard enable$'),T('BPDU Guard by default on PortFast ports','^global$','^spanning-tree portfast bpduguard default$')],[],'SW1');
L('2.5','Apply Root Guard and Loop Guard','Gi0/24 faces a customer switch and must never accept a superior BPDU. Gi0/23 is a fiber uplink that needs Loop Guard. Enable Loop Guard by default as well.',[T('Root Guard on Gi0/24','^gi0/24$','^spanning-tree guard root$'),T('Loop Guard on Gi0/23','^gi0/23$','^spanning-tree guard loop$'),T('Loop Guard by default','^global$','^spanning-tree loopguard default$')],[],'SW1');
L('3.2','Configure default, network and host routes','R1 reaches the Internet via 203.0.113.1. Add a default route, a network route to 10.20.0.0/16 via 192.168.1.2, and a host route to 10.30.5.5 via 192.168.1.3.',[T('Default route','^global$','^ip route 0\\.0\\.0\\.0 0\\.0\\.0\\.0 203\\.0\\.113\\.1$'),T('Network route to 10.20.0.0/16','^global$','^ip route 10\\.20\\.0\\.0 255\\.255\\.0\\.0 192\\.168\\.1\\.2$'),T('Host route to 10.30.5.5','^global$','^ip route 10\\.30\\.5\\.5 255\\.255\\.255\\.255 192\\.168\\.1\\.3$')],[],'R1');
L('3.2','Add a floating static backup','OSPF (AD 110) normally reaches 10.0.0.0/8 through 192.168.1.2. Add a backup static route through 192.168.2.2 that appears only if OSPF fails.',[T('Floating static through 192.168.2.2 with AD above 110','^global$','^ip route 10\\.0\\.0\\.0 255\\.0\\.0\\.0 192\\.168\\.2\\.2 (11[1-9]|1[2-9]\\d|2\\d\\d)$')],[],'R1');
L('3.2','Configure IPv6 static routes','Enable IPv6 routing, add an IPv6 default route to 2001:db8:ffff::1, and a route to 2001:db8:50::/64 via 2001:db8:1::2.',[T('Enable IPv6 routing','^global$','^ipv6 unicast-routing$'),T('IPv6 default route','^global$','^ipv6 route ::/0 2001:db8:ffff::1$'),T('Route to 2001:db8:50::/64','^global$','^ipv6 route 2001:db8:50::/64 2001:db8:1::2$')],[],'R1');
L('3.3','Configure single-area OSPFv2','Run OSPF process 1 with router ID 1.1.1.1. Advertise 10.1.1.0/24 and 10.1.2.0/30 in area 0 using wildcard masks, and make Gi0/0 passive.',[T('Router ID','^router ospf 1$','^router-id 1\\.1\\.1\\.1$'),T('Advertise 10.1.1.0/24','^router ospf 1$','^network 10\\.1\\.1\\.0 0\\.0\\.0\\.255 area 0$'),T('Advertise 10.1.2.0/30','^router ospf 1$','^network 10\\.1\\.2\\.0 0\\.0\\.0\\.3 area 0$'),T('Gi0/0 passive','^router ospf 1$','^passive-interface gi0/0$')],[],'R1');
L('3.3','Tune OSPF network types and priority','Router R2 must always win DR on Gi0/0 (priority 255), never be DR on Gi0/2 (priority 0), treat Gi0/1 as point-to-point, and use router ID 2.2.2.2.',[T('Gi0/0 priority 255','^gi0/0$','^ip ospf priority 255$'),T('Gi0/2 priority 0','^gi0/2$','^ip ospf priority 0$'),T('Gi0/1 point-to-point','^gi0/1$','^ip ospf network point-to-point$'),T('Router ID 2.2.2.2','^router ospf 1$','^router-id 2\\.2\\.2\\.2$')],[],'R2');
L('3.3','Configure OSPFv3 for IPv6','Enable IPv6 routing, create OSPFv3 process 1 with router ID 3.3.3.3, and enable it on Gi0/0 in area 0.',[T('Enable IPv6 routing','^global$','^ipv6 unicast-routing$'),T('OSPFv3 router ID','^ipv6 router ospf 1$','^router-id 3\\.3\\.3\\.3$'),T('Enable on Gi0/0 area 0','^gi0/0$','^ipv6 ospf 1 area 0$')],[],'R3');
L('3.4','Configure HSRP','R1 Gi0/0 (10.1.1.2/24) is the preferred gateway for virtual IP 10.1.1.254 in HSRP group 1. Give it priority 110 and let it reclaim the active role.',[T('Virtual IP','^gi0/0$','^standby 1 ip 10\\.1\\.1\\.254$'),T('Priority 110','^gi0/0$','^standby 1 priority 110$'),T('Preempt','^gi0/0$','^standby 1 preempt$')],['gi0/0|ip address 10.1.1.2 255.255.255.0'],'R1');
L('4.1','Secure remote access with local users and SSH','Set hostname R1, domain lab.local, create user admin with privilege 15 and a secret, and make the VTY lines accept only SSH with local login.',[T('Hostname R1','^global$','^hostname r1$'),T('Domain name','^global$','^ip domain-name lab\\.local$'),T('User admin with privilege 15 and secret','^global$','^username admin privilege 15 secret \\S+$'),T('VTY SSH only','^line vty 0 4$','^transport input ssh$'),T('VTY local login','^line vty 0 4$','^login local$')],[],'Router');
L('4.1','Configure TACACS+ authentication','Enable AAA, define TACACS+ server TAC1 at 10.1.1.10, and make login use TACACS+ with local as a fallback.',[T('Enable AAA','^global$','^aaa new-model$'),T('TAC1 server address','^tacacs server tac1$','^address ipv4 10\\.1\\.1\\.10$'),T('Login method list','^global$','^aaa authentication login default group tacacs\\+ local$')],[],'R1');
L('4.2','Prepare a router for SCP','Set the domain lab.local, generate a 2048-bit RSA key, require SSH version 2 and enable the SCP server.',[T('Domain name','^global$','^ip domain-name lab\\.local$'),T('RSA key','^global$','^crypto key generate rsa modulus 2048$'),T('SSH version 2','^global$','^ip ssh version 2$'),T('SCP server','^global$','^ip scp server enable$')],[],'R1');
L('4.3','Configure PAT with interface overload','Inside network 192.168.1.0/24 is on Gi0/0 and the Internet is on Gi0/1. Let the inside hosts share the Gi0/1 address.',[T('ACL for the inside network','^global$','^access-list 1 permit 192\\.168\\.1\\.0 0\\.0\\.0\\.255$'),T('Gi0/0 is inside','^gi0/0$','^ip nat inside$'),T('Gi0/1 is outside','^gi0/1$','^ip nat outside$'),T('Overload on Gi0/1','^global$','^ip nat inside source list 1 interface gi0/1 overload$')],[],'R1');
L('4.3','Configure static NAT for a server','Publish inside server 192.168.1.10 as 203.0.113.10. Gi0/0 faces the inside and Gi0/1 faces the Internet.',[T('Gi0/0 inside','^gi0/0$','^ip nat inside$'),T('Gi0/1 outside','^gi0/1$','^ip nat outside$'),T('Static translation','^global$','^ip nat inside source static 192\\.168\\.1\\.10 203\\.0\\.113\\.10$')],[],'R1');
L('4.6','Apply a standard ACL','Only 192.168.1.0/24 may leave through Gi0/1. Create the numbered standard ACL 10 and apply it outbound on Gi0/1.',[T('ACL 10 permits the subnet','^global$','^access-list 10 permit 192\\.168\\.1\\.0 0\\.0\\.0\\.255$'),T('Apply ACL 10 outbound on Gi0/1','^gi0/1$','^ip access-group 10 out$')],[],'R1');
L('4.6','Build a named extended ACL','Hosts in 10.1.1.0/24 may use only HTTP and HTTPS to any destination. Build ACL WEB-ONLY and apply it inbound on Gi0/0.',[T('Permit HTTP','^ip access-list extended web-only$','^permit tcp 10\\.1\\.1\\.0 0\\.0\\.0\\.255 any eq (80|www)$'),T('Permit HTTPS','^ip access-list extended web-only$','^permit tcp 10\\.1\\.1\\.0 0\\.0\\.0\\.255 any eq 443$'),T('Apply inbound on Gi0/0','^gi0/0$','^ip access-group web-only in$')],[],'R1');
L('4.6','Restrict VTY access with an ACL','Only the admin PC 10.1.1.50 may manage the router. Permit it in ACL 5, apply the ACL inbound on the VTY lines and allow SSH only.',[T('ACL 5 permits the admin PC','^global$','^access-list 5 permit host 10\\.1\\.1\\.50$'),T('Apply ACL 5 to VTY','^line vty 0 4$','^access-class 5 in$'),T('SSH only','^line vty 0 4$','^transport input ssh$')],[],'R1');
L('4.7','Configure port security','Fa0/1 is an access port that must allow two sticky MAC addresses and drop and log any violation without shutting down.',[T('Access mode','^fa0/1$','^switchport mode access$'),T('Enable port security','^fa0/1$','^switchport port-security$'),T('Maximum 2 addresses','^fa0/1$','^switchport port-security maximum 2$'),T('Sticky learning','^fa0/1$','^switchport port-security mac-address sticky$'),T('Violation restrict','^fa0/1$','^switchport port-security violation restrict$')],[],'SW1');
L('4.7','Protect VLAN 10 with DHCP snooping and DAI','Enable DHCP snooping and ARP inspection for VLAN 10 and trust uplink Gi0/1 for both.',[T('Enable DHCP snooping','^global$','^ip dhcp snooping$'),T('Snooping on VLAN 10','^global$','^ip dhcp snooping vlan 10$'),T('ARP inspection on VLAN 10','^global$','^ip arp inspection vlan 10$'),T('Trust Gi0/1 for DHCP snooping','^gi0/1$','^ip dhcp snooping trust$'),T('Trust Gi0/1 for DAI','^gi0/1$','^ip arp inspection trust$')],[],'SW1');
L('4.7','Limit storms and rogue RAs','Fa0/2 is a user port. Limit broadcast to 20 percent, shut the port down if exceeded, and block rogue IPv6 Router Advertisements.',[T('Broadcast level 20','^fa0/2$','^storm-control broadcast level 20$'),T('Shutdown action','^fa0/2$','^storm-control action shutdown$'),T('RA Guard on the port','^fa0/2$','^ipv6 nd raguard')],[],'SW1');
L('5.4','Enable SNMP monitoring','The NMS at 10.1.1.100 polls with read-only community CCNA-RO using SNMPv2c and must receive traps.',[T('Read-only community','^global$','^snmp-server community ccna-ro ro$'),T('Trap host','^global$','^snmp-server host 10\\.1\\.1\\.100 (version 2c )?ccna-ro$'),T('Enable traps','^global$','^snmp-server enable traps')],[],'R1');
L('5.6','Send logs to a syslog server','Send warnings and worse to 10.1.1.200, add millisecond timestamps, and keep a 16384-byte local buffer.',[T('Syslog host','^global$','^logging host 10\\.1\\.1\\.200$'),T('Trap level warnings','^global$','^logging trap (warnings|4)$'),T('Millisecond timestamps','^global$','^service timestamps log datetime msec$'),T('Local buffer','^global$','^logging buffered 16384$')],[],'R1');
const VOC='interface switchport mode access trunk allowed native vlan shutdown address router network area passive-interface default-router description duplex speed spanning-tree portfast channel-group active passive permit deny access-group access-list standard extended helper-address username secret hostname configure terminal enable show running-config startup-config brief route ip domain-name transport input login logging service timestamps standby priority preempt storm-control broadcast level action port-security maximum violation restrict sticky trust snooping inspection no'.split(' ');
const V0=['interface','switchport','configure','enable','show','router','hostname','username','description','shutdown','duplex','speed','spanning-tree','channel-group','standby','storm-control','logging','service','access-list','access-class','transport','login','exit','end','vlan','line','permit','deny','network','passive-interface','default-router','dns-server','lease','name'],VS=['mode','access','trunk','voice','port-security','allowed','native','vlan','maximum','violation','mac-address','sticky'],VSH=['running-config','interface','brief','vlan','route'];
const ex=(t,i,f)=>{if(t.length<3)return t;const v=i==0?V0:f=='switchport'?VS:f=='show'?VSH:f=='no'&&i==1?['shutdown']:null;if(!v||v.includes(t))return t;const c=v.filter(x=>x.startsWith(t));return c.length==1?c[0]:t};
const nm=raw=>{let s=raw.trim().toLowerCase().replace(/\s+/g,' ').replace(/(gigabitethernet|gigabit|gig) ?(\d)/g,'gi$2').replace(/(fastethernet|fast) ?(\d)/g,'fa$2').replace(/port-channel ?(\d)/g,'po$1').replace(/loopback ?(\d)/g,'lo$1');let t=s.split(' ');t=t.map((x,i)=>ex(x,i,t[0]));if(t[0]=='no'&&(t[1]=='sh'||t[1]=='shut'))t[1]='shutdown';if(t[0]=='sh')t[0]='show';if(t[0]=='en')t[0]='enable';if(t[0]=='conf')t[0]='configure';if(t[0]=='configure'&&t[1]&&'terminal'.startsWith(t[1]))t[1]='terminal';return t.join(' ')};
const SINGLE=/^(ip address|description|duplex|speed|switchport mode|switchport access vlan|switchport voice vlan|switchport trunk native vlan|hostname|router-id|name|ip ospf priority|ip ospf network|standby \d+ priority|standby \d+ ip|ip default-gateway|spanning-tree mode|lease|ip domain-name)/;
let S=null,cur=0,lib=null;
const q=x=>document.querySelector(x);
const mask2p=m=>m.split('.').reduce((a,x)=>a+(+x).toString(2).replace(/0/g,'').length,0);
function ctxOf(s){let m;if(m=s.match(/^interface (.+)$/)){return m[1].replace(/ /g,'')}if(/^(router |line |ip dhcp pool |ip access-list |ipv6 router |tacacs server |vlan \d+$)/.test(s))return s;return null}
function add(ctx,line){const a=S.cfg[ctx]=S.cfg[ctx]||[];const k=(line.match(SINGLE)||[])[0];if(k&&!/^(ipv6)/.test(line))for(let i=a.length-1;i>=0;i--)if(a[i].startsWith(k))a.splice(i,1);const n=a.indexOf('no '+line);if(n>=0)a.splice(n,1);if(!a.includes(line))a.push(line)}
function del(ctx,x){const a=S.cfg[ctx]||[];let hit=false;for(let i=a.length-1;i>=0;i--)if(a[i]==x||a[i].startsWith(x+' ')){a.splice(i,1);hit=true}if(!hit&&!(x=='shutdown'))add(ctx,'no '+x)}
function status(){const L=LABS[cur],k=L.k;return k.map(t=>{const re=new RegExp(t[1]),lr=new RegExp(t[2]),cs=Object.keys(S.cfg).filter(c=>re.test(c));if(!cs.length)return false;return t[3]?cs.every(c=>!S.cfg[c].some(l=>lr.test(l))):cs.some(c=>S.cfg[c].some(l=>lr.test(l)))})}
function show(c){const cf=S.cfg;if(/^show (running-config|run)/.test(c))return 'Building configuration...\n'+Object.keys(cf).map(k=>(k=='global'?'':k+'\n')+cf[k].map(l=>(k=='global'?'':' ')+l).join('\n')).filter(x=>x.trim()).join('\n!\n');
if(c=='show ip interface brief')return 'Interface      IP-Address       Status\n'+Object.keys(cf).filter(k=>/^(gi|fa|te|po|lo|vlan)\d/.test(k)).map(k=>{const ip=(cf[k].find(l=>l.startsWith('ip address '))||'').split(' ')[2]||'unassigned';return k.padEnd(14)+ip.padEnd(17)+(cf[k].includes('shutdown')?'administratively down':'up')}).join('\n');
if(c=='show vlan brief')return 'VLAN Name           Ports\n1    default\n'+Object.keys(cf).filter(k=>/^vlan \d+$/.test(k)).map(k=>{const id=k.split(' ')[1],nmv=(cf[k].find(l=>l.startsWith('name '))||'name VLAN'+id.padStart(4,'0')).slice(5),ports=Object.keys(cf).filter(p=>cf[p].includes('switchport access vlan '+id)).join(', ');return id.padEnd(5)+nmv.padEnd(15)+ports}).join('\n');
if(c=='show ip route')return Object.keys(cf).flatMap(k=>cf[k].filter(l=>/^ip address \d/.test(l)).map(l=>{const[,,a,m]=l.split(' ');return 'C    '+a+'/'+mask2p(m)+' is directly connected, '+k})).concat((cf.global||[]).filter(l=>l.startsWith('ip route ')).map(l=>{const[,,n,m,nh]=l.split(' ');return 'S    '+n+'/'+mask2p(m)+' [1/0] via '+nh})).join('\n')||'No routes.';
return '% Command not simulated in this lab. Use show running-config, show ip interface brief, show vlan brief or show ip route.'}
function run(raw){const L=LABS[cur];let c=nm(raw),o='';const p=prompt_();
if(!c){S.log+=p+'\n';return draw()}
if(S.mode=='user'){if(c=='enable')S.mode='priv';else o='% Command not available. Type enable.'}
else if(S.mode=='priv'){if(c=='configure terminal'){S.mode='conf';S.ctx='global'}else if(/^show /.test(c))o=show(c);else if(c=='disable')S.mode='user';else if(/^(copy running-config startup-config|write memory|write)$/.test(c))o='Building configuration...\n[OK]';else if(/^(ping|traceroute)/.test(c))o='% Not simulated. Verify with show commands.';else if(c=='?')o='enable | configure terminal | show running-config | show ip interface brief | show vlan brief | show ip route';else o='% Invalid input'}
else{if(c=='end')S.mode='priv';else if(c=='exit'){if(S.ctx!='global')S.ctx='global';else S.mode='priv'}else if(/^do /.test(c))o=show(c.slice(3));else{const cx=ctxOf(c);if(cx){S.ctx=cx;if(!S.cfg[cx]){S.cfg[cx]=[];if(L.ds&&new RegExp(L.ds).test(cx))S.cfg[cx].push('shutdown')}}else if(c.startsWith('no '))del(S.ctx,c.slice(3));else add(S.ctx,c)}}
S.log+=p+' '+raw+'\n'+(o?o+'\n':'');const st=status();if(st.every(Boolean)&&!DONE[L.o+L.t]){DONE[L.o+L.t]=1;sv()}draw()}
function prompt_(){const L=LABS[cur],h=L.h;if(S.mode=='user')return h+'>';if(S.mode=='priv')return h+'#';const c=S.ctx;return h+'('+(c=='global'?'config':/^(gi|fa|te|po|lo|vlan\d|range)/.test(c)?'config-if':/^router/.test(c)?'config-router':/^vlan /.test(c)?'config-vlan':/^ip dhcp/.test(c)?'dhcp-config':/^line/.test(c)?'config-line':/^ip access/.test(c)?'config-ext-nacl':'config-sub')+')#'}
function start(i){cur=i;const L=LABS[i];S={mode:'user',ctx:'global',cfg:{global:[]},log:'Lab console. Type ? for supported commands. Abbreviations such as conf t and int work.\n'};L.init.forEach(x=>{const[c,l]=x.split('|');(S.cfg[c]=S.cfg[c]||[]).push(l)});draw()}
function draw(){const L=LABS[cur],st=status(),main=q('#main'),dn=st.every(Boolean);
main.innerHTML='<div class="eyebrow">Lab '+(cur+1)+' of '+LABS.length+' · Objective '+L.o+'</div><h1>'+L.t+'</h1><div class="card"><p>'+L.s+'</p>'+L.k.map((t,i)=>'<div>'+(st[i]?'✅ ':'⬜ ')+t[0]+'</div>').join('')+(dn?'<p style="margin-top:10px"><span class="pill correct">Lab complete</span></p>':'')+'</div><div class="card" id="lt" style="background:#0b0f14;color:#9ef0b2;font-family:Consolas,monospace;font-size:.85rem;height:300px;overflow:auto"><pre style="margin:0;white-space:pre-wrap;font:inherit">'+S.log.replace(/</g,'&lt;')+'</pre>'+prompt_()+' <input id="li" autocomplete="off" style="background:transparent;border:0;color:inherit;font:inherit;outline:0;width:55%"></div><div class="quiz-nav"><button class="btn secondary" id="lb">Back to library</button><button class="btn secondary" id="lr">Reset lab</button>'+(cur<LABS.length-1?'<button class="btn" id="ln">Next lab</button>':'')+'</div>';
const i=q('#li');i.addEventListener('keydown',e=>{if(e.key=='Enter')run(i.value)});i.focus();q('#lt').scrollTop=1e6;
q('#lb').addEventListener('click',()=>{window.renderLabs(main)});q('#lr').addEventListener('click',()=>start(cur));const n=q('#ln');if(n)n.addEventListener('click',()=>start(cur+1))}
window.labLib=function(b){const dn=Object.keys(DONE).length;b.innerHTML='<p class="muted">'+LABS.length+' hands-on configuration labs, each checked against the final configuration like an exam simulation. Completed: '+dn+' of '+LABS.length+'.</p><div class="grid grid-2">'+LABS.map((l,i)=>'<div class="card"><div class="card-icon-row">'+icon('program','icon-lg')+'<strong>'+l.t+'</strong></div><div class="muted" style="font-size:.75rem;font-weight:700;text-transform:uppercase;margin-bottom:4px">'+l.o+' · '+(OBJ_INDEX[l.o]?OBJ_INDEX[l.o].title:'').slice(0,70)+'</div><div class="muted" style="margin-bottom:10px">'+l.k.length+' tasks'+(DONE[l.o+l.t]?' · <span class="pill correct">Completed</span>':'')+'</div><button class="btn" data-l="'+i+'">Start lab</button></div>').join('')+'</div>';b.querySelectorAll('[data-l]').forEach(x=>x.addEventListener('click',()=>start(+x.dataset.l)))};
window.__LABS=LABS;})();

const PTLABS=[
{n:1,t:'VLANs, 802.1Q Trunking and Router-on-a-Stick',o:'2.1.b · 2.2.a · 2.4 · 1.3',goal:'Segment two departments into VLANs, trunk them to a router, and route between VLANs using sub-interfaces.',
devs:['R1: Cisco 2911 router','SW1: Cisco 2960-24TT switch','PC1, PC2: PC-PT'],
cab:['PC1 Fa0 to SW1 Fa0/1','PC2 Fa0 to SW1 Fa0/2','SW1 Gi0/1 to R1 Gi0/0'],
topo:'PC1 --Fa0/1--+\n               SW1 --Gi0/1====Gi0/0-- R1\nPC2 --Fa0/2--+',
addr:[['PC1','Fa0','192.168.10.10/24','GW 192.168.10.1 (VLAN 10)'],['PC2','Fa0','192.168.20.10/24','GW 192.168.20.1 (VLAN 20)'],['R1','Gi0/0.10','192.168.10.1/24','dot1Q 10'],['R1','Gi0/0.20','192.168.20.1/24','dot1Q 20'],['R1','Gi0/0.99','192.168.99.1/24','dot1Q 99 native'],['SW1','VLAN 99','192.168.99.2/24','GW 192.168.99.1']],
tasks:['Create VLANs 10 (SALES), 20 (ENG) and 99 (MGMT) on SW1.','Put Fa0/1 in VLAN 10 and Fa0/2 in VLAN 20 as access ports with PortFast.','Configure Gi0/1 as a trunk: native VLAN 99, allowed VLANs 10, 20, 99.','Create the three R1 sub-interfaces with encapsulation dot1Q.','Give SW1 a management SVI and default gateway.','Ping from PC1 to PC2 and to the SW1 management address.'],
cfg:{SW1:`hostname SW1
vlan 10
 name SALES
vlan 20
 name ENG
vlan 99
 name MGMT
interface fa0/1
 switchport mode access
 switchport access vlan 10
 spanning-tree portfast
interface fa0/2
 switchport mode access
 switchport access vlan 20
 spanning-tree portfast
interface gi0/1
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,20,99
interface vlan 99
 ip address 192.168.99.2 255.255.255.0
 no shutdown
ip default-gateway 192.168.99.1`,R1:`hostname R1
interface gi0/0
 no shutdown
interface gi0/0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0
interface gi0/0.20
 encapsulation dot1Q 20
 ip address 192.168.20.1 255.255.255.0
interface gi0/0.99
 encapsulation dot1Q 99 native
 ip address 192.168.99.1 255.255.255.0`},
ver:['SW1: show vlan brief','SW1: show interfaces trunk','R1: show ip interface brief','R1: show ip route','PC1: ping 192.168.20.10'],
ch:'Change the trunk native VLAN on SW1 only to 1 and read the CDP native VLAN mismatch messages. Then fix it.'},
{n:2,t:'LACP EtherChannel and Rapid PVST+',o:'2.1.c · 2.5.a · 2.5.b · 2.5.c · 2.5.d',goal:'Bundle two links with LACP, make SW1 the root bridge, and protect edge and root ports.',
devs:['SW1, SW2, SW3: Cisco 2960-24TT','PC1, PC2: PC-PT'],
cab:['SW1 Fa0/1-2 to SW2 Fa0/1-2 (two links)','SW2 Gi0/1 to SW3 Gi0/1','SW1 Gi0/1 to SW3 Gi0/2','PC1 to SW2 Fa0/3','PC2 to SW3 Fa0/3'],
topo:'SW1 ==Fa0/1-2 (Po1, LACP)== SW2 --Fa0/3-- PC1\n SW1 Gi0/1 -------- SW3 Gi0/2\n SW2 Gi0/1 -------- SW3 Gi0/1\n SW3 Fa0/3 -------- PC2',
addr:[['PC1','Fa0','192.168.10.11/24','VLAN 10'],['PC2','Fa0','192.168.10.12/24','VLAN 10']],
tasks:['Enable Rapid PVST+ on all switches and create VLAN 10.','Make SW1 root primary and SW2 root secondary for VLAN 10.','Bundle SW1-SW2 with LACP: SW1 active, SW2 passive, as trunk Po1.','Trunk the SW2-SW3 and SW1-SW3 links.','Enable PortFast and BPDU Guard on host ports.','Enable Root Guard on SW1 Gi0/1 toward SW3.','Identify root, designated and alternate ports with show spanning-tree.'],
cfg:{SW1:`hostname SW1
spanning-tree mode rapid-pvst
vlan 10
spanning-tree vlan 10 root primary
interface range fa0/1 - 2
 channel-group 1 mode active
interface port-channel 1
 switchport mode trunk
interface gi0/1
 switchport mode trunk
 spanning-tree guard root`,SW2:`hostname SW2
spanning-tree mode rapid-pvst
vlan 10
spanning-tree vlan 10 root secondary
interface range fa0/1 - 2
 channel-group 1 mode passive
interface port-channel 1
 switchport mode trunk
interface gi0/1
 switchport mode trunk
interface fa0/3
 switchport mode access
 switchport access vlan 10
 spanning-tree portfast
 spanning-tree bpduguard enable`,SW3:`hostname SW3
spanning-tree mode rapid-pvst
vlan 10
interface range gi0/1 - 2
 switchport mode trunk
interface fa0/3
 switchport mode access
 switchport access vlan 10
 spanning-tree portfast
 spanning-tree bpduguard enable`},
ver:['SW1: show etherchannel summary','SW1: show spanning-tree vlan 10','SW3: show spanning-tree vlan 10','SW2: show spanning-tree summary','PC1: ping 192.168.10.12'],
ch:'Set SW3 priority to 0 for VLAN 10 and observe Root Guard on SW1 Gi0/1 (root-inconsistent). Then remove it.'},
{n:3,t:'DHCP Server, Relay and APIPA Troubleshooting',o:'1.7 · 1.3 · 2.4',goal:'Serve two subnets from one router and relay requests across a routed link.',
devs:['R1, R2: Cisco 2911','SW1, SW2: Cisco 2960-24TT (default config)','PC1, PC2: PC-PT (DHCP)'],
cab:['PC1 to SW1 Fa0/1, SW1 Fa0/2 to R1 Gi0/0','R1 Gi0/1 to R2 Gi0/0','R2 Gi0/1 to SW2 Fa0/2, SW2 Fa0/1 to PC2'],
topo:'PC1--SW1--Gi0/0 R1 Gi0/1====Gi0/0 R2 Gi0/1--SW2--PC2\n   192.168.10.0/24    10.0.0.0/30    192.168.20.0/24',
addr:[['R1','Gi0/0','192.168.10.1/24','DHCP server LAN10'],['R1','Gi0/1','10.0.0.1/30',''],['R2','Gi0/0','10.0.0.2/30',''],['R2','Gi0/1','192.168.20.1/24','relay to 10.0.0.1']],
tasks:['Address the interfaces and add the static routes.','On R1 exclude .1 to .10 in both subnets and build pools LAN10 and LAN20 with gateway and DNS 8.8.8.8.','Configure ip helper-address on R2 Gi0/1.','Set both PCs to DHCP and confirm leases.','Remove the helper address and observe the 169.254 address, then restore it.'],
cfg:{R1:`hostname R1
ip dhcp excluded-address 192.168.10.1 192.168.10.10
ip dhcp excluded-address 192.168.20.1 192.168.20.10
ip dhcp pool LAN10
 network 192.168.10.0 255.255.255.0
 default-router 192.168.10.1
 dns-server 8.8.8.8
ip dhcp pool LAN20
 network 192.168.20.0 255.255.255.0
 default-router 192.168.20.1
 dns-server 8.8.8.8
interface gi0/0
 ip address 192.168.10.1 255.255.255.0
 no shutdown
interface gi0/1
 ip address 10.0.0.1 255.255.255.252
 no shutdown
ip route 192.168.20.0 255.255.255.0 10.0.0.2`,R2:`hostname R2
interface gi0/0
 ip address 10.0.0.2 255.255.255.252
 no shutdown
interface gi0/1
 ip address 192.168.20.1 255.255.255.0
 ip helper-address 10.0.0.1
 no shutdown
ip route 0.0.0.0 0.0.0.0 10.0.0.1`},
ver:['R1: show ip dhcp binding','R1: show ip dhcp pool','PC2: ipconfig /all','PC2: ping 192.168.10.1'],
ch:'Change the LAN20 pool network to 192.168.21.0 and use the lease and ipconfig output to find why PC2 gets the wrong gateway.'},
{n:4,t:'IPv4/IPv6 Addressing and Static Routing with Floating Backup',o:'1.4 · 3.1 · 3.2.a · 3.2.b · 3.2.d',goal:'Dual-stack three routers with static routes and a floating backup path.',
devs:['R1, R2, R3: Cisco 2911','PC1, PC3: PC-PT'],
cab:['PC1 to R1 Gi0/0','R1 Gi0/1 to R2 Gi0/0','R2 Gi0/1 to R3 Gi0/0','R3 Gi0/1 to PC3','R1 Gi0/2 to R3 Gi0/2 (backup)'],
topo:'PC1--R1==R2==R3--PC3\n      \\_________/\n      (backup link, Gi0/2)',
addr:[['PC1','Fa0','192.168.1.10/24','GW 192.168.1.1; IPv6 2001:db8:1::10/64, GW FE80::1'],['PC3','Fa0','192.168.3.10/24','GW 192.168.3.1; IPv6 2001:db8:3::10/64, GW 2001:db8:3::1'],['R1 Gi0/1 / R2 Gi0/0','10.0.12.0/30','2001:db8:12::/64',''],['R2 Gi0/1 / R3 Gi0/0','10.0.23.0/30','2001:db8:23::/64',''],['R1 Gi0/2 / R3 Gi0/2','10.0.13.0/30','2001:db8:13::/64','backup']],
tasks:['Configure all IPv4 and IPv6 addresses. Use EUI-64 on R1 Gi0/0 with link-local FE80::1.','Enable ipv6 unicast-routing on all routers.','Configure primary static routes over R2 and floating routes (AD 5) over the backup link.','Add a default route on R3 with a floating backup.','Verify show ip route and show ipv6 route, then fail R2 and watch the backup install.'],
cfg:{R1:`hostname R1
ipv6 unicast-routing
interface gi0/0
 ip address 192.168.1.1 255.255.255.0
 ipv6 address 2001:db8:1::/64 eui-64
 ipv6 address fe80::1 link-local
 no shutdown
interface gi0/1
 ip address 10.0.12.1 255.255.255.252
 ipv6 address 2001:db8:12::1/64
 no shutdown
interface gi0/2
 ip address 10.0.13.1 255.255.255.252
 ipv6 address 2001:db8:13::1/64
 no shutdown
ip route 192.168.3.0 255.255.255.0 10.0.12.2
ip route 192.168.3.0 255.255.255.0 10.0.13.2 5
ipv6 route 2001:db8:3::/64 2001:db8:12::2
ipv6 route 2001:db8:3::/64 2001:db8:13::3 5`,R2:`hostname R2
ipv6 unicast-routing
interface gi0/0
 ip address 10.0.12.2 255.255.255.252
 ipv6 address 2001:db8:12::2/64
 no shutdown
interface gi0/1
 ip address 10.0.23.1 255.255.255.252
 ipv6 address 2001:db8:23::1/64
 no shutdown
ip route 192.168.1.0 255.255.255.0 10.0.12.1
ip route 192.168.3.0 255.255.255.0 10.0.23.2
ipv6 route 2001:db8:1::/64 2001:db8:12::1
ipv6 route 2001:db8:3::/64 2001:db8:23::3`,R3:`hostname R3
ipv6 unicast-routing
interface gi0/0
 ip address 10.0.23.2 255.255.255.252
 ipv6 address 2001:db8:23::3/64
 no shutdown
interface gi0/1
 ip address 192.168.3.1 255.255.255.0
 ipv6 address 2001:db8:3::1/64
 no shutdown
interface gi0/2
 ip address 10.0.13.2 255.255.255.252
 ipv6 address 2001:db8:13::3/64
 no shutdown
ip route 0.0.0.0 0.0.0.0 10.0.23.1
ip route 0.0.0.0 0.0.0.0 10.0.13.1 5
ipv6 route ::/0 2001:db8:23::1
ipv6 route ::/0 2001:db8:13::1 5`},
ver:['R1: show ip route static','R1: show ipv6 interface brief (note the EUI-64 address)','R1: show ipv6 route','PC1: ping 192.168.3.10','PC1: ping 2001:db8:3::10'],
ch:'Shut down both R2 interfaces. Confirm that the floating routes (AD 5) install on R1 and R3 and that pings still succeed.'},
{n:5,t:'Single-Area OSPFv2: DR/BDR, Point-to-Point and Passive Interfaces',o:'3.3.a · 3.3.b · 3.3.c · 3.3.d · 3.1',goal:'Build a one-area OSPF network with a broadcast segment and a point-to-point link.',
devs:['R1, R2, R3, R4: Cisco 2911','SW1: Cisco 2960-24TT (default)','PC1, PC2, PC4: PC-PT (optional)'],
cab:['R1, R2, R3 Gi0/0 to SW1 Fa0/1, Fa0/2, Fa0/3','R3 Gi0/1 to R4 Gi0/0','R1, R2, R4 LAN ports on Gi0/1 (to a PC)'],
topo:'R1--+\nR2--+--SW1 (10.1.1.0/24)\nR3--+\n |\nR3==10.2.2.0/30==R4--LAN 192.168.4.0/24',
addr:[['R1 Gi0/0','10.1.1.1/24','priority 200','RID 1.1.1.1'],['R2 Gi0/0','10.1.1.2/24','priority 100','RID 2.2.2.2'],['R3 Gi0/0','10.1.1.3/24','priority 0','RID 3.3.3.3'],['R3 Gi0/1','10.2.2.1/30','point-to-point',''],['R4 Gi0/0','10.2.2.2/30','point-to-point','RID 4.4.4.4'],['LANs','192.168.1.0/24, 192.168.2.0/24, 192.168.4.0/24','passive','']],
tasks:['Address all interfaces.','Configure OSPF process 1 with explicit router IDs and network statements using wildcard masks.','Make R1 the DR (priority 200), R2 the BDR, and R3 ineligible (priority 0).','Set the R3-R4 link to point-to-point.','Make LAN interfaces passive.','Compare show ip ospf neighbor on each router and read the DR/BDR/DROTHER roles.'],
cfg:{R1:`hostname R1
interface gi0/0
 ip address 10.1.1.1 255.255.255.0
 ip ospf priority 200
 no shutdown
interface gi0/1
 ip address 192.168.1.1 255.255.255.0
 no shutdown
router ospf 1
 router-id 1.1.1.1
 network 10.1.1.0 0.0.0.255 area 0
 network 192.168.1.0 0.0.0.255 area 0
 passive-interface gi0/1`,R2:`hostname R2
interface gi0/0
 ip address 10.1.1.2 255.255.255.0
 ip ospf priority 100
 no shutdown
interface gi0/1
 ip address 192.168.2.1 255.255.255.0
 no shutdown
router ospf 1
 router-id 2.2.2.2
 network 10.1.1.0 0.0.0.255 area 0
 network 192.168.2.0 0.0.0.255 area 0
 passive-interface gi0/1`,R3:`hostname R3
interface gi0/0
 ip address 10.1.1.3 255.255.255.0
 ip ospf priority 0
 no shutdown
interface gi0/1
 ip address 10.2.2.1 255.255.255.252
 ip ospf network point-to-point
 no shutdown
router ospf 1
 router-id 3.3.3.3
 network 10.1.1.0 0.0.0.255 area 0
 network 10.2.2.0 0.0.0.3 area 0`,R4:`hostname R4
interface gi0/0
 ip address 10.2.2.2 255.255.255.252
 ip ospf network point-to-point
 no shutdown
interface gi0/1
 ip address 192.168.4.1 255.255.255.0
 no shutdown
router ospf 1
 router-id 4.4.4.4
 network 10.2.2.0 0.0.0.3 area 0
 network 192.168.4.0 0.0.0.255 area 0
 passive-interface gi0/1`},
ver:['R1: show ip ospf neighbor','R3: show ip ospf neighbor','R1: show ip route ospf','R1: show ip ospf interface brief','R1: ping 192.168.4.1'],
ch:'If the DR is not R1, run clear ip ospf process on all routers (DR election is not preemptive). Then change R2 priority to 255 and explain why nothing changes until the process restarts.'},
{n:6,t:'First Hop Redundancy with HSRP',o:'3.4 · 3.2.a · 2.4',goal:'Give hosts a resilient default gateway and test failover.',
devs:['R1, R2, ISP: Cisco 2911','SW1: Cisco 2960-24TT (default)','PC1: PC-PT'],
cab:['R1 Gi0/0 to SW1 Fa0/1','R2 Gi0/0 to SW1 Fa0/2','PC1 to SW1 Fa0/3','R1 Gi0/1 to ISP Gi0/0','R2 Gi0/1 to ISP Gi0/1'],
topo:'            +--R1--+\nPC1--SW1--+      +--ISP (8.8.8.8)\n            +--R2--+',
addr:[['PC1','Fa0','192.168.1.10/24','GW 192.168.1.1 (virtual)'],['R1','Gi0/0','192.168.1.2/24','priority 110'],['R2','Gi0/0','192.168.1.3/24','priority 100'],['R1 / ISP','10.0.1.0/30','',''],['R2 / ISP','10.0.2.0/30','',''],['ISP','Loopback0','8.8.8.8/32','']],
tasks:['Address the routers and add default routes toward ISP.','Configure HSRP group 1 with virtual IP 192.168.1.1; R1 priority 110 with preempt.','Point PC1 at the virtual IP.','Run a continuous ping to 8.8.8.8, then shut R1 Gi0/0 and watch R2 become active.','Restore R1 and confirm it preempts.'],
cfg:{R1:`hostname R1
interface gi0/0
 ip address 192.168.1.2 255.255.255.0
 standby 1 ip 192.168.1.1
 standby 1 priority 110
 standby 1 preempt
 no shutdown
interface gi0/1
 ip address 10.0.1.1 255.255.255.252
 no shutdown
ip route 0.0.0.0 0.0.0.0 10.0.1.2`,R2:`hostname R2
interface gi0/0
 ip address 192.168.1.3 255.255.255.0
 standby 1 ip 192.168.1.1
 standby 1 priority 100
 standby 1 preempt
 no shutdown
interface gi0/1
 ip address 10.0.2.1 255.255.255.252
 no shutdown
ip route 0.0.0.0 0.0.0.0 10.0.2.2`,ISP:`hostname ISP
interface gi0/0
 ip address 10.0.1.2 255.255.255.252
 no shutdown
interface gi0/1
 ip address 10.0.2.2 255.255.255.252
 no shutdown
interface loopback0
 ip address 8.8.8.8 255.255.255.255
ip route 192.168.1.0 255.255.255.0 10.0.1.1
ip route 192.168.1.0 255.255.255.0 10.0.2.1 10`},
ver:['R1: show standby brief','R2: show standby brief','PC1: ping 8.8.8.8 -t','R2: show standby brief (after shutting R1 Gi0/0)'],
ch:'Remove preempt from R1, repeat the failover test, and explain why R1 does not take the active role back.'},
{n:7,t:'NAT: PAT Overload and Static NAT',o:'4.3 · 3.2.a · 2.4',goal:'Translate private hosts through one public address and publish an inside server with static NAT.',
devs:['R1, ISP: Cisco 2911','SW1: Cisco 2960-24TT (default)','PC1, PC2: PC-PT','Inside Server, Web Server: Server-PT'],
cab:['PC1, PC2, Inside Server to SW1','SW1 to R1 Gi0/0','R1 Gi0/1 to ISP Gi0/0','ISP Gi0/1 to Web Server'],
topo:'PC1,PC2,InsideSrv--SW1--R1(Gi0/0 inside | Gi0/1 outside)--ISP--Web Server 198.51.100.10',
addr:[['PC1 / PC2','192.168.1.10 / .11','GW 192.168.1.1',''],['Inside Server','192.168.1.50/24','GW 192.168.1.1','static NAT to 203.0.113.3'],['R1 Gi0/0','192.168.1.1/24','inside',''],['R1 Gi0/1','203.0.113.2/29','outside',''],['ISP Gi0/0','203.0.113.1/29','',''],['ISP Gi0/1','198.51.100.1/24','','Web Server .10']],
tasks:['Address all devices and add R1 default route to the ISP.','Mark R1 Gi0/0 as inside and Gi0/1 as outside.','Configure ACL 1 and PAT with interface overload.','Add static NAT for the inside server to 203.0.113.3.','Browse to the web server from PC1 and confirm translations.'],
cfg:{R1:`hostname R1
interface gi0/0
 ip address 192.168.1.1 255.255.255.0
 ip nat inside
 no shutdown
interface gi0/1
 ip address 203.0.113.2 255.255.255.248
 ip nat outside
 no shutdown
ip route 0.0.0.0 0.0.0.0 203.0.113.1
access-list 1 permit 192.168.1.0 0.0.0.255
ip nat inside source list 1 interface gi0/1 overload
ip nat inside source static 192.168.1.50 203.0.113.3`,ISP:`hostname ISP
interface gi0/0
 ip address 203.0.113.1 255.255.255.248
 no shutdown
interface gi0/1
 ip address 198.51.100.1 255.255.255.0
 no shutdown`},
ver:['R1: show ip nat translations','R1: show ip nat statistics','PC1: ping 198.51.100.10 then open the web server in the browser','Web Server: observe that sources appear as 203.0.113.2'],
ch:'Remove the overload keyword and observe what happens when two PCs ping at once. Then explain the difference between inside local and inside global in the table.'},
{n:8,t:'Standard, Extended and Named ACLs with Secured VTY',o:'4.6 · 4.1 · 4.2 · 2.4',goal:'Restrict guest access with a named extended ACL and limit management to one host over SSH.',
devs:['R1: Cisco 2911','PC1 (admin), PC2 (guest): PC-PT','Server: Server-PT (HTTP on)'],
cab:['PC1 to R1 Gi0/0','Server to R1 Gi0/1','PC2 to R1 Gi0/2'],
topo:'PC1(admin)--Gi0/0\nServer----Gi0/1--R1\nPC2(guest)-Gi0/2',
addr:[['PC1','192.168.10.10/24','GW 192.168.10.1',''],['Server','192.168.20.10/24','GW 192.168.20.1',''],['PC2','192.168.30.10/24','GW 192.168.30.1',''],['R1','Gi0/0 .10.1  Gi0/1 .20.1  Gi0/2 .30.1','','']],
tasks:['Address the router and the hosts.','Create named extended ACL GUEST-IN: permit TCP 80 to the server and UDP 53, deny all other guest traffic.','Apply GUEST-IN inbound on Gi0/2.','Enable SSH and permit only PC1 (standard ACL 10) with access-class on the VTY lines.','Test: guest browses the server but cannot ping it; only PC1 can SSH.'],
cfg:{R1:`hostname R1
ip domain-name lab.local
username admin privilege 15 secret C1sco#123
crypto key generate rsa modulus 1024
ip ssh version 2
interface gi0/0
 ip address 192.168.10.1 255.255.255.0
 no shutdown
interface gi0/1
 ip address 192.168.20.1 255.255.255.0
 no shutdown
interface gi0/2
 ip address 192.168.30.1 255.255.255.0
 ip access-group GUEST-IN in
 no shutdown
ip access-list extended GUEST-IN
 permit tcp 192.168.30.0 0.0.0.255 host 192.168.20.10 eq 80
 permit udp 192.168.30.0 0.0.0.255 any eq 53
 deny ip 192.168.30.0 0.0.0.255 any
access-list 10 permit host 192.168.10.10
line vty 0 4
 access-class 10 in
 transport input ssh
 login local`},
ver:['R1: show access-lists (watch the hit counters)','PC2: browse to http://192.168.20.10 (works), ping 192.168.20.10 (fails)','PC1: ssh -l admin 192.168.10.1 (works)','PC2: ssh -l admin 192.168.30.1 (fails)'],
ch:'Move the deny entry above the permit and predict, then confirm, what happens to web access.'},
{n:9,t:'Layer 2 Security: Port Security, DHCP Snooping, DAI and Storm Control',o:'4.7.a · 4.7.b · 4.7.c · 4.7.e · 1.7',goal:'Block a rogue DHCP server, validate ARP, limit MACs and storms on an access switch.',
devs:['R1: Cisco 2911 (DHCP server)','SW1: Cisco 2960-24TT','PC1, PC2: PC-PT (DHCP)','Rogue: Server-PT with its own DHCP pool'],
cab:['R1 Gi0/0 to SW1 Gi0/1','PC1 to SW1 Fa0/1','PC2 to SW1 Fa0/2','Rogue server to SW1 Fa0/3'],
topo:'R1--Gi0/1 SW1 --Fa0/1-- PC1\n(trusted)    |--Fa0/2-- PC2\n             |--Fa0/3-- Rogue DHCP server',
addr:[['R1','Gi0/0','192.168.10.1/24','DHCP pool 192.168.10.0/24'],['Rogue','Fa0','10.9.9.1/24','DHCP pool 10.9.9.100+']],
tasks:['Build the legitimate DHCP server on R1 and confirm both PCs get 192.168.10.x.','Enable the rogue DHCP service and watch a PC take a 10.9.9.x lease (the attack).','Enable DHCP snooping on VLAN 10 and trust only Gi0/1. Renew the PCs.','Enable DAI on VLAN 10 and trust Gi0/1.','Apply sticky port security (max 2, restrict) and storm control to the host ports.'],
cfg:{R1:`hostname R1
ip dhcp excluded-address 192.168.10.1 192.168.10.10
ip dhcp pool LAN
 network 192.168.10.0 255.255.255.0
 default-router 192.168.10.1
interface gi0/0
 ip address 192.168.10.1 255.255.255.0
 no shutdown`,SW1:`hostname SW1
vlan 10
ip dhcp snooping
ip dhcp snooping vlan 10
ip arp inspection vlan 10
interface gi0/1
 switchport mode access
 switchport access vlan 10
 ip dhcp snooping trust
 ip arp inspection trust
interface range fa0/1 - 3
 switchport mode access
 switchport access vlan 10
 spanning-tree portfast
 spanning-tree bpduguard enable
 switchport port-security
 switchport port-security maximum 2
 switchport port-security mac-address sticky
 switchport port-security violation restrict
 storm-control broadcast level 20
 ip dhcp snooping limit rate 15`},
ver:['SW1: show ip dhcp snooping binding','SW1: show port-security interface fa0/1','SW1: show ip arp inspection','PC1: ipconfig /renew then ipconfig','SW1: show interfaces status err-disabled'],
ch:'Change the violation mode to shutdown, connect a third device through a hub, and recover the port after it goes err-disabled.'},
{n:10,t:'Device Management: SSH, AAA, SNMP, Syslog, CDP/LLDP and Config Backup',o:'4.1 · 4.2 · 5.4 · 5.6 · 2.3 · 5.3',goal:'Secure and monitor a router and switch, validate documentation and back up configuration.',
devs:['R1: Cisco 2911','SW1: Cisco 2960-24TT','Admin PC: PC-PT','Server0: Server-PT (Syslog, AAA, TFTP on)'],
cab:['Admin PC to SW1 Fa0/1','SW1 Gi0/1 to R1 Gi0/0','R1 Gi0/1 to Server0'],
topo:'Admin PC--SW1--R1--Server0 (Syslog / RADIUS / TFTP)',
addr:[['Admin PC','192.168.10.10/24','GW 192.168.10.1',''],['SW1','VLAN 1','192.168.10.2/24','GW 192.168.10.1'],['R1 Gi0/0','192.168.10.1/24','',''],['R1 Gi0/1','192.168.50.1/24','',''],['Server0','192.168.50.10/24','GW 192.168.50.1','RADIUS client R1 192.168.50.1 key radiuskey; user radiususer / radpass']],
tasks:['Address everything and verify reachability.','Create a local admin account, then enable AAA with RADIUS first and local as fallback.','Enable SSH version 2 on R1 and SW1 and restrict the VTY lines to SSH.','Send warnings to the syslog server with millisecond timestamps.','Configure an SNMP read-only community and query it from the Admin PC MIB Browser.','Use CDP (and LLDP if your version supports it) to confirm the topology matches your diagram.','Back up the running-config to the TFTP server. Real hardware would use SCP or SFTP; Packet Tracer only supports TFTP.'],
cfg:{R1:`hostname R1
ip domain-name lab.local
username admin privilege 15 secret C1sco#123
radius-server host 192.168.50.10 key radiuskey
aaa new-model
aaa authentication login default group radius local
crypto key generate rsa modulus 1024
ip ssh version 2
interface gi0/0
 ip address 192.168.10.1 255.255.255.0
 no shutdown
interface gi0/1
 ip address 192.168.50.1 255.255.255.0
 no shutdown
line vty 0 4
 transport input ssh
service timestamps log datetime msec
logging host 192.168.50.10
logging trap warnings
snmp-server community CCNA-RO ro
snmp-server location Lab-Rack1`,SW1:`hostname SW1
ip domain-name lab.local
username admin privilege 15 secret C1sco#123
crypto key generate rsa modulus 1024
ip ssh version 2
interface vlan 1
 ip address 192.168.10.2 255.255.255.0
 no shutdown
ip default-gateway 192.168.10.1
line vty 0 15
 transport input ssh
 login local
service timestamps log datetime msec
logging host 192.168.50.10`},
ver:['Admin PC: ssh -l admin 192.168.10.1','R1: show cdp neighbors detail','R1: show logging','Server0: Services > SYSLOG (confirm messages)','R1: copy running-config tftp: (host 192.168.50.10)','Admin PC: Desktop > MIB Browser, community CCNA-RO'],
ch:'Fail the RADIUS server (power it off) and log in over SSH to prove the local fallback works.'}];
function ptText(l){const L=[];const h=s=>{L.push('');L.push(s);L.push('='.repeat(s.length))};
L.push('CCNA LAB '+String(l.n).padStart(2,'0')+': '+l.t);L.push('Exam objectives: '+l.o);L.push('Goal: '+l.goal);
h('HOW TO USE IN PACKET TRACER');L.push('1. Place the devices below and cable them as listed (Automatic cable type is fine).');L.push('2. Configure the PC and server IP settings from the addressing table.');L.push('3. Open each device CLI tab and try the tasks yourself first.');L.push('4. Compare with the SOLUTION CONFIGS or paste them (enable, then configure terminal, then paste).');L.push('5. Save your own .pkt file from Packet Tracer (File > Save).');
h('DEVICES');l.devs.forEach(x=>L.push('- '+x));h('CABLING');l.cab.forEach(x=>L.push('- '+x));h('TOPOLOGY');L.push(l.topo);
h('ADDRESSING');l.addr.forEach(r=>L.push('- '+r.filter(Boolean).join(' | ')));
h('TASKS');l.tasks.forEach((x,i)=>L.push((i+1)+'. '+x));
h('VERIFICATION');l.ver.forEach(x=>L.push('- '+x));
h('CHALLENGE');L.push(l.ch);
h('SOLUTION CONFIGS');Object.keys(l.cfg).forEach(k=>{L.push('');L.push('--- '+k+' ---');L.push(l.cfg[k])});
return L.join('\n')}


function dlPT(name,text){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type:'text/plain'}));a.download=name;a.click()}
function renderPTLabs(main){main.innerHTML='<div class="eyebrow">Packet Tracer</div><h1 style="font-family:var(--font-body); margin:0 0 10px;">Packet Tracer labs</h1><p class="muted">Ten full labs mapped to the exam objectives. Packet Tracer saves its own encrypted .pkt format, which a website cannot generate, so each lab downloads as a guide with topology, cabling, addressing, tasks, paste-ready solution configs and verification steps. Build it in Packet Tracer, then save your own .pkt. The configs use Packet Tracer 8.x syntax but have not been run inside the application; if a command is rejected, skip it.</p><div class="card"><button class="btn" id="ptAll">Download all 10 labs (one text file)</button></div>'+PTLABS.map(l=>'<div class="card"><div class="card-icon-row">'+icon('pbq','icon-lg')+'<strong>Lab '+l.n+': '+l.t+'</strong></div><div class="muted" style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.03em;margin-bottom:6px">Objectives '+l.o+'</div><p>'+l.goal+'</p><details style="margin-bottom:12px"><summary style="cursor:pointer;font-weight:600">View topology, tasks and configs</summary><pre style="white-space:pre-wrap;font-size:.78rem;background:var(--bg-sunken);padding:12px;border-radius:8px;margin-top:10px;overflow:auto">'+ptText(l).replace(/&/g,"&amp;").replace(/</g,"&lt;")+'</pre></details><button class="btn" data-pt="'+l.n+'">Download Lab '+l.n+'</button></div>').join('');
main.querySelectorAll('[data-pt]').forEach(b=>b.addEventListener('click',()=>{const l=PTLABS[+b.dataset.pt-1];dlPT('CCNA-Lab'+String(l.n).padStart(2,'0')+'-'+l.t.replace(/[^A-Za-z0-9]+/g,'-')+'.txt',ptText(l))}));
document.getElementById('ptAll').addEventListener('click',()=>dlPT('CCNA-Packet-Tracer-Labs.txt',PTLABS.map(ptText).join('\n\n\n'+'#'.repeat(70)+'\n\n')))}

route();

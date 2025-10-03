jup-arb-starter
Minimal Go + TS skeleton for SOL↔LST micro-arb on Solana.
quick start
cp config/config.yaml.sample config/config.yaml
edit RPC & key path
go run main.go --paper --pair SOL-mSOL --capital 0.5
EOF
first commit
git add .
git commit -m "init: Go+TS starter, systemd unit, config template"
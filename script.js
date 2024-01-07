const nodes = [
	{
		id: "t1-orirock",
		name: "源岩鉱",
		image: "img/orirock1.png",
		color: "#A0A1A0",
		targets: [{ id: "t2-orirock", count: 3 }],
	},
	{
		id: "t2-orirock",
		name: "初級源岩",
		image: "img/orirock2.png",
		color: "#DEE63C",
		targets: [{ id: "t3-orirock", count: 5 }],
	},
	{
		id: "t3-orirock",
		name: "中級源岩",
		image: "img/orirock3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-orirock", count: 4 },
			{ id: "t4-rma", count: 2 },
			{ id: "t4-device", count: 2 },
			{ id: "t4-fiber", count: 1 },
		],
	},
	{
		id: "t4-orirock",
		name: "上級源岩",
		image: "img/orirock4.png",
		color: "#D6C5D7",
		targets: [
			{ id: "t5-polymerization", count: 1 },
		],
	},
	{
		id: "t1-device",
		name: "破損装置",
		image: "img/device1.png",
		color: "#A0A1A0",
		targets: [{ id: "t2-device", count: 3 }],
	},
	{
		id: "t2-device",
		name: "初級装置",
		image: "img/device2.png",
		color: "#DEE63C",
		targets: [{ id: "t3-device", count: 4 }],
	},
	{
		id: "t3-device",
		name: "中級装置",
		image: "img/device3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-device", count: 1 },
			{ id: "t4-grindstone", count: 1 },
			{ id: "t4-oriron", count: 1 },
			{ id: "t4-alloy", count: 1 },
		],
	},
	{
		id: "t4-device",
		name: "上級装置",
		image: "img/device4.png",
		color: "#D6C5D7",
		targets: [{ id: "t5-nanoflake", count: 1 }],
	},
	{
		id: "t1-ester",
		name: "エステル原料",
		image: "img/ester1.png",
		color: "#A0A1A0",
		targets: [{ id: "t2-ester", count: 3 }],
	},
	{
		id: "t2-ester",
		name: "初級エステル",
		image: "img/ester2.png",
		color: "#DEE63C",
		targets: [{ id: "t3-ester", count: 4 }],
	},
	{
		id: "t3-ester",
		name: "中級エステル",
		image: "img/ester3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-ester", count: 2 },
			{ id: "t4-manganese", count: 1 },
			{ id: "t4-oriron", count: 1 },
			{ id: "t4-fiber", count: 2 },
		],
	},
	{
		id: "t4-ester",
		name: "上級エステル",
		image: "img/ester4.png",
		color: "#D6C5D7",
		targets: []
	},
	{
		id: "t1-sugar",
		name: "ブドウ糖",
		image: "img/sugar1.png",
		color: "#A0A1A0",
		targets: [{ id: "t2-sugar", count: 3 }],
	},
	{
		id: "t2-sugar",
		name: "初級糖原",
		image: "img/sugar2.png",
		color: "#DEE63C",
		targets: [{ id: "t3-sugar", count: 4 }],
	},
	{
		id: "t3-sugar",
		name: "中級糖原",
		image: "img/sugar3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-sugar", count: 2 },
			{ id: "t4-kohl", count: 1 },
			{ id: "t4-aketon", count: 1 },
			{ id: "t4-salt", count: 1 },
		],
	},
	{
		id: "t4-sugar",
		name: "上級糖原",
		image: "img/sugar4.png",
		color: "#D6C5D7",
		targets: []
	},
	{
		id: "t1-oriron",
		name: "異鉄の欠片",
		image: "img/oriron1.png",
		color: "#A0A1A0",
		targets: [{ id: "t2-oriron", count: 3 }],
	},
	{
		id: "t2-oriron",
		name: "初級異鉄",
		image: "img/oriron2.png",
		color: "#DEE63C",
		targets: [{ id: "t3-oriron", count: 4 }],
	},
	{
		id: "t3-oriron",
		name: "中級異鉄",
		image: "img/oriron3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-oriron", count: 2 },
			{ id: "t4-grindstone", count: 1 },
			{ id: "t4-sugar", count: 1 },
			{ id: "t4-gel", count: 1 },
		],
	},
	{
		id: "t4-oriron",
		name: "上級異鉄",
		image: "img/oriron4.png",
		color: "#D6C5D7",
		targets: [{ id: "t5-polymerization", count: 1 }],
	},
	{
		id: "t1-aketon",
		name: "アケトン試剤",
		image: "img/aketon1.png",
		color: "#A0A1A0",
		targets: [{ id: "t2-aketon", count: 3 }],
	},
	{
		id: "t2-aketon",
		name: "初級アケトン",
		image: "img/aketon2.png",
		color: "#DEE63C",
		targets: [{ id: "t3-aketon", count: 4 }],
	},
	{
		id: "t3-aketon",
		name: "中級アケトン",
		image: "img/aketon3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-aketon", count: 2 },
			{ id: "t4-rma" },
			{ id: "t4-ester" },
		],
	},
	{
		id: "t4-aketon",
		name: "上級アケトン",
		image: "img/aketon4.png",
		color: "#D6C5D7",
		targets: [{ id: "t5-polymerization", count: 1 }],
	},
	{
		id: "t3-manganese",
		name: "マンガン",
		image: "img/manganese3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-manganese", count: 2 },
			{ id: "t4-sugar", count: 1 },
			{ id: "t4-aketon", count: 1 },
		],
	},
	{
		id: "t4-manganese",
		name: "上級マンガン",
		image: "img/manganese4.png",
		color: "#D6C5D7",
		targets: [{ id: "t5-steel", count: 1 }],
	},
	{
		id: "t3-grindstone",
		name: "砥石",
		image: "img/grindstone3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-grindstone", count: 1 },
			{ id: "t4-device", count: 1 },
			{ id: "t4-alloy", count: 1 },
		],
	},
	{
		id: "t4-grindstone",
		name: "上級砥石",
		image: "img/grindstone4.png",
		color: "#D6C5D7",
		targets: [{ id: "t5-steel", count: 1 }],
	},
	{
		id: "t3-rma",
		name: "RMA70-12",
		image: "img/rma3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-rma", count: 1 },
			{ id: "t4-kohl", count: 1 },
			{ id: "t4-fluid", count: 1 },
		],
	},
	{
		id: "t4-rma",
		name: "RMA70-24",
		image: "img/rma4.png",
		color: "#D6C5D7",
		targets: [{ id: "t5-steel", count: 1 }],
	},
	{
		id: "t3-kohl",
		name: "合成コール",
		image: "img/kohl3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-kohl", count: 1 },
			{ id: "t4-manganese", count: 1 },
			{ id: "t4-ester", count: 1 },
		],
	},
	{
		id: "t4-kohl",
		name: "上級合成コール",
		image: "img/kohl4.png",
		color: "#D6C5D7",
		targets: [{ id: "t5-nanoflake", count: 2 }],
	},
	{
		id: "t3-gel",
		name: "人工ゲル",
		image: "img/gel3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-gel", count: 1 },
			{ id: "t4-crystalline", count: 1 },
			{ id: "t4-solvent", count: 1 },
		],
	},
	{
		id: "t4-gel",
		name: "融合ゲル",
		image: "img/gel4.png",
		color: "#D6C5D7",
		targets: [{ id: "t5-crystalline", count: 2 }],
	},
	{
		id: "t3-alloy",
		name: "熾合金",
		image: "img/alloy3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-alloy", count: 1 },
			{ id: "t4-gel", count: 1 },
			{ id: "t4-crystalline", count: 1 },
		],
	},
	{
		id: "t4-alloy",
		name: "上級熾合金",
		image: "img/alloy4.png",
		color: "#D6C5D7",
		targets: [{ id: "t5-crystalline", count: 1 }],
	},
	{
		id: "t3-crystalline",
		name: "素子結晶",
		image: "img/crystalline3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-crystalline", count: 2 },
			{ id: "t4-fluid", count: 1 },
		],
	},
	{
		id: "t4-crystalline",
		name: "結晶回路",
		image: "img/crystalline4.png",
		color: "#D6C5D7",
		targets: [{ id: "t5-crystalline", count: 1 }],
	},
	{
		id: "t3-solvent",
		name: "半自然溶剤",
		image: "img/solvent3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-solvent", count: 1 },
			{ id: "t4-salt", count: 1 },
		],
	},
	{
		id: "t4-solvent",
		name: "精錬溶剤",
		image: "img/solvent4.png",
		color: "#D6C5D7",
		targets: [{ id: "t5-nucleic", count: 2 }],
	},
	{
		id: "t3-fluid",
		name: "切削液",
		image: "img/fluid3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-fluid", count: 1 },
			{ id: "t4-solvent", count: 1 },
		],
	},
	{
		id: "t4-fluid",
		name: "上級切削液",
		image: "img/fluid4.png",
		color: "#D6C5D7",
		targets: [{ id: "t5-nucleic", count: 1 }],
	},
	{
		id: "t3-salt",
		name: "転化塩",
		image: "img/salt3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-salt", count: 1 },
			{ id: "t4-hydrocarbon", count: 1 },
		],
	},
	{
		id: "t4-salt",
		name: "上級転化塩",
		image: "img/salt4.png",
		color: "#D6C5D7",
		targets: [{ id: "t5-nucleic", count: 1 }],
	},
	{
		id: "t3-fiber",
		name: "褐素纤维",
		image: "img/fiber3.png",
		color: "#02B2FB",
		targets: [
			{ id: "t4-fiber", count: 1 },
			{ id: "t4-hydrocarbon", count: 1 },
		],
	},
	{
		id: "t4-fiber",
		name: " 固化纤维板",
		image: "img/fiber4.png",
		color: "#D6C5D7",
		targets: [],
	},
	{
		id: "t3-hydrocarbon",
		name: "环烃聚质",
		image: "img/hydrocarbon3.png",
		color: "#02B2FB",
		targets: [{ id: "t4-hydrocarbon", count: 1 }],
	},
	{
		id: "t4-hydrocarbon",
		name: "环烃预制体",
		image: "img/hydrocarbon4.png",
		color: "#D6C5D7",
		targets: [],
	},
	{
		id: "t5-steel",
		name: "D32鋼",
		image: "img/steel5.png",
		color: "#FDC806",
		targets: [],
	},
	{
		id: "t5-nanoflake",
		name: "ナノフレーク",
		image: "img/nanoflake5.png",
		color: "#FDC806",
		targets: [],
	},
	{
		id: "t5-polymerization",
		name: "融合剤",
		image: "img/polymerization5.png",
		color: "#FDC806",
		targets: [],
	},
	{
		id: "t5-crystalline",
		name: "結晶制御装置",
		image: "img/crystalline5.png",
		color: "#FDC806",
		targets: [],
	},
	{
		id: "t5-nucleic",
		name: "焼結核凝晶",
		image: "img/nucleic5.png",
		color: "#FDC806",
		targets: [],
	},
]

const links = nodes.flatMap((node) => {
	return node.targets.map((target) => {
		return {
			source: node.id,
			target: target.id,
			count: target.count ?? 1,
		}
	})
})

const node_size = 60
const link_color = "#666"
const link_text_color = "#FFF"

window.onload = () => {
	let w = document.body.offsetWidth
	let h = document.body.offsetHeight

	const svg = d3
		.select("body").select("svg").attr("width", w).attr("height", h)

	svg
		.append("defs")
		.selectAll("marker")
		.data(["end"])
		.enter()
		.append("marker")
		.attr("id", String)
		.attr("viewBox", "0 -5 10 10")
		.attr("refX", 24)
		.attr("refY", 0)
		.attr("markerWidth", 10)
		.attr("markerHeight", 10)
		.attr("orient", "auto")
		.append("path")
		.attr("d", "M0,-5L10,0L0,5")
		.attr("fill", link_color)

	const drag = d3
		.drag()
		.on("start", (d) => {
			if (!d3.event.active) {
				simulation.alphaTarget(0.3).restart()
			}
			d.fx = d.x
			d.fy = d.y
		})
		.on("drag", (d) => {
			d.fx = d3.event.x
			d.fy = d3.event.y
		})
		.on("end", (d) => {
			if (!d3.event.active) {
				simulation.alphaTarget(0)
			}
			d.fx = null
			d.fy = null
			// d.fx = d3.event.x
			// d.fy = d3.event.y
		})

	const link = svg
		.append("g")
		.selectAll("g")
		.data(links)
		.enter().append("g")

	link.append("line")
		.attr("stroke", link_color)
		.attr("stroke-width", 2)
		.attr("marker-end", "url(#end)")

	link.append("circle")
		.attr("fill", link_color)
		.attr("r", 10)

	link.append("text")
		.attr("fill", link_text_color)
		.attr("font-weight", "bold")
		.attr("font-size", "12px")
		.attr("text-anchor", "middle")
		.attr("dy", "4px")
		.text((d) => {
			return d.count
		})

	const node = svg
		.append("g")
		.selectAll("g")
		.data(nodes)
		.enter().append("g")

	node.append("circle")
		.attr("r", node_size / 2)
		.attr("fill", (d) => d.color)
		.attr("opacity", 0.8)

	node.append("image")
		.attr("xlink:href", (d) => d.image)
		.attr("width", node_size-10)
		.attr("height", node_size-10)
		.call(drag)

	node.append("text")
		.attr("font-weight", "bold")
		.attr("font-size", "12px")
		.attr("text-anchor", "middle")
		.attr("fill", "#000")
		.attr("stroke", "#fff")
		.attr("stroke-width", "0.05")
		.attr("dy", "30")
		.text((d) => d.name)

	const padding = 40

	function posx(v) {
		return Math.max(padding, Math.min(v, w - padding))
	}

	function posx2(d) {
		const sx = posx(d.source.x)
		const sy = posy(d.source.y)
		const tx = posx(d.target.x)
		const ty = posy(d.target.y)
		return sx + (node_size / 2 + 10) * Math.cos(Math.atan2(ty - sy, tx - sx))
	}
	function posy(v) {
		return Math.max(padding, Math.min(v, h - padding))
	}

	function posy2(d) {
		const sx = posx(d.source.x)
		const sy = posy(d.source.y)
		const tx = posx(d.target.x)
		const ty = posy(d.target.y)
		return sy + (node_size / 2 + 10) * Math.sin(Math.atan2(ty - sy, tx - sx))
	}

	const simulation = d3
		.forceSimulation(nodes)
		.force(
			"link",
			d3.forceLink(links).id((d) => d.id)
		)
		.force("center", d3.forceCenter(w / 2, h / 2))
		.force("collide", d3.forceCollide(60))
		.on("tick", () => {
			link.select("line")
				.attr("x1", (d) => posx(d.source.x))
				.attr("y1", (d) => posy(d.source.y))
				.attr("x2", (d) => posx(d.target.x))
				.attr("y2", (d) => posy(d.target.y))
			link.select("circle")
				.attr("cx", (d) => posx2(d))
				.attr("cy", (d) => posy2(d))
			link.select("text")
				.attr("x", (d) => posx2(d))
				.attr("y", (d) => posy2(d))

			node.select("circle")
				.attr("cx", (d) => posx(d.x))
				.attr("cy", (d) => posy(d.y))
			node.select("image")
				.attr("x", (d) => posx(d.x) - (node_size-10) / 2)
				.attr("y", (d) => posy(d.y) - (node_size-10) / 2)
			node.select("text")
				.attr("x", (d) => posx(d.x))
				.attr("y", (d) => posy(d.y))
				
		})

	window.addEventListener("resize", () => {
		w = window.innerWidth
		h = window.innerHeight
		svg.attr("width", w).attr("height", h)
		simulation.force("center", d3.forceCenter(w / 2, h / 2)).restart()
	})
}

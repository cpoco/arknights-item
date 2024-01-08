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
		.attr("width", node_size - 10)
		.attr("height", node_size - 10)
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
				.attr("x", (d) => posx(d.x) - (node_size - 10) / 2)
				.attr("y", (d) => posy(d.y) - (node_size - 10) / 2)
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

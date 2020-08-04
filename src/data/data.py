import json

nodes = []
links = []
names = {}
i = 0
print("reading file ...")
with open('data.json') as json_file:
	data = json.load(json_file)
	for link in data['linkes']:
		if link['width'] >= 3500000:
			if not link['source'] in names:
				names[link['source']] = i
				node = {}
				node['id'] = i
				i += 1
				node['name'] = link['source']
				nodes.append(node)
			if not link['target'] in names:
				names[link['target']] = i
				node = {}
				node['id'] = i
				i += 1
				node['name'] = link['target']
				nodes.append(node)
	print("writing nodes file ...")
	with open('nodes.json', 'w') as outfile:
		json.dump(nodes, outfile)
	for link in data['linkes']:
		if link['width'] >= 3500000:
			node = {}
			node['source'] = names[link['source']]
			node['target'] = names[link['target']]
			links.append(node)
	print("writing linkes file ...")
	with open('linkes.json', 'w') as outfile:
		json.dump(links, outfile)

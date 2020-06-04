/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe. 
*/

// Decorates an ExportNode, typically by wrapping the widget.
class NodeDecorator {
	// NodeDecorators should also have a static `create(node, ctx)` method
	// that creates, adds, and returns an instance if appropriate.

	constructor(node, ctx) {
		this.node = node;
		node.addDecorator(this);
	}

	serialize(nodeStr, serializer, ctx) {
		return this._serialize(nodeStr, serializer, ctx);
	}

	_serialize(nodeStr, serializer, ctx) {
		return nodeStr;
	}
}
exports.NodeDecorator = NodeDecorator;

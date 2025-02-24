function mincost(arr)
{ 
//write your code here
// return the min cost
	if (arr.length === 1) return 0; // No cost if only one rope exists

    // Create a Min Heap using a priority queue (min-heap)
    let minHeap = arr.slice().sort((a, b) => a - b); // Initial sorting

    let totalCost = 0;

    while (minHeap.length > 1) {
        let first = minHeap.shift(); // Smallest element
        let second = minHeap.shift(); // Second smallest element
        let cost = first + second;
        totalCost += cost;

        // Insert the new rope into the correct position to maintain sorted order
        let index = minHeap.findIndex(x => x > cost);
        if (index === -1) {
            minHeap.push(cost);
        } else {
            minHeap.splice(index, 0, cost);
        }
    }

    return totalCost;
}

module.exports=mincost;
